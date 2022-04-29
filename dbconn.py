from multiprocessing import connection
from matplotlib.pyplot import connect
import mysql.connector

connection=mysql.connector.connect(host='localhost',port='3306',database='covid',user='root')

cursor= connection.cursor()
query= "insert into ad (username,password) values('ad1','ad1')"


cursor.execute(query)
connection.commit()



