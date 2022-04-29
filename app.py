
from flask import Flask, redirect, render_template, request, session, url_for,jsonify
import mysql.connector
from datetime import date
import os


connection=mysql.connector.connect(host='localhost',port='3306',database='covid',user='root')
cursor= connection.cursor()


app=Flask( __name__ )
app.secret_key="hello"

@app.route('/face/')
def face():
    os.system('python detect_mask_video.py')
    return'<h1> Face mask detection<h1>'

@app.route('/human/')
def human():
    os.system('python human.py')




    return'<h1> Human Count<h1>'



@app.route("/home.html")
def home():
    return render_template('home.html',username=session['username'])



@app.route("/",methods=['GET','POST'])
def login():
    msg=""
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']
        q='select * from ad where username=%s and password=%s'
        
        cursor.execute(q,(username,password))
        record= cursor.fetchone()
        if record:
            session['logggedin']=True
            session['username']=record[0]
            return redirect(url_for('home'))
    else:
        msg="INCORRECT"
        
    return render_template('login.html',msg=msg)


@app.route('/logout')
def logout():
     session.pop('loggedin',None)
     session.pop('username',None)
     return redirect(url_for('login')) 
   
@app.route('/add/')
def add():
    if session['username'] :
         return render_template('add.html')
        
    else:
       return redirect( url_for('login'))

@app.route('/adduser',methods=['GET','POST'])
def adduser():
    
    if request.method=='POST':
            name=request.form['name']
            aadhar=request.form['aadhar']
            num=request.form['number']
            d=date.today().strftime("%y-%m-%d")

            q='insert into people values(%s,%s,%s,%s)'

            cursor.execute(q,(name,aadhar,num,d))
            connection.commit()
            return "<h1>Sucess</h1>"
        
        
    
    return redirect( url_for('login'))


@app.route('/search/',methods=['GET','POST'])
def search():
    
    if request.method=='POST':
            date=request.form['date']

            q="select * from people where date=%s"
            cursor.execute(q,(date,))
            record=cursor.fetchall()
            return render_template('search.html',record=record)
           
           
    else:
        return render_template('search.html')


if __name__ == '__main__':
  app.run(debug=True)