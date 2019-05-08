package dao

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	mathRand "math/rand"
	"sync"
	"time"
	_ "github.com/lib/pq"
)

type dbConn struct {
	db  *sqlx.DB
	mux sync.Mutex
}

var dbs [2]*dbConn
var sessionConnStr string
func Init(connStr string) {
	sessionConnStr = connStr
	var err error
	for i, _ := range dbs {
		dbs[i] = &dbConn{}
		err = connect(dbs[i])
		if err != nil {
			break
		}
	}

	if err != nil {
		time.Sleep(time.Second)
		Init(sessionConnStr)
	}
}

func connect(d *dbConn) error {
	d.mux.Lock()
	defer d.mux.Unlock()

	if d.db == nil || d.db.Stats().OpenConnections == 0 {
		dd, err := sqlx.Connect("postgres", sessionConnStr)
		if err != nil {
			fmt.Println(err)
			return err
		}

		err = dd.Ping()
		if err != nil {
			return err
		}

		if d.db != nil {
			d.db.Close()
		}

		d.db = dd
	}

	return nil
}

func GetDB() *sqlx.DB {
	i := mathRand.Int() % len(dbs)
	d := dbs[i]

	if(d == nil){
		dbs[i] = &dbConn{}
		d = dbs[i]
	}

	if d.db == nil || d.db.Stats().OpenConnections == 0 {
		connect(d)
	}
	return d.db
}