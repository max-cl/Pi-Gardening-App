#!/usr/bin/python
import os, time
import sys, getopt, pprint
import datetime
from pymongo import MongoClient
from bson.objectid import ObjectId
import subprocess
import ConfigParser
import random


def insert_document(collectionName, documentToInsert):
    collectionName.insert_many(documentToInsert)

def mongodb_connection(stringDBConnection, connectionTimeout):
    mongo_client = MongoClient(stringDBConnection,serverSelectionTimeoutMS=connectionTimeout,connectTimeoutMS=connectionTimeout,socketTimeoutMS=connectionTimeout) 
    return mongo_client

### Config reading and valuable init ###
config = ConfigParser.RawConfigParser()
scriptDir = os.path.dirname(os.path.realpath(__file__))
config.read('config.ini')

### MONGODB CONNECTION ###
dbAddress = config.get('connection', 'db_address')
dbClient = config.get('connection', 'db_client')
dbCollectionName = config.get('connection', 'db_collection_name')
connectionTimeout = config.get('connection', 'db_connection_timeout_ms')

mongo_client = mongodb_connection(dbAddress, connectionTimeout)
db = mongo_client[dbClient]
collection = db[dbCollectionName]

### SENSOR INFORMATION ###
deviceId = config.get('device', 'device_id')
sensorId1 = config.get('device', 'sensor_id_1')
sensorId2 = config.get('device', 'sensor_id_2')


def func(maxrt):
    stop = datetime.datetime.now() + maxrt
    while datetime.datetime.now() < stop:
        time.sleep(5)
        #datetime object containing current date and time
        now = datetime.datetime.now()
        
        # dd/mm/YY H:M:S
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

        newDocument = [{
            "sensorId": ObjectId(sensorId1),
            'deviceId': ObjectId(deviceId),
            "date": dt_string,
            'value': random.randint(0,50)
        },
        {
            "sensorId": ObjectId(sensorId2),
            'deviceId': ObjectId(deviceId),
            "date": dt_string,
            'value': random.randint(0,50)
        }]

        insert_document(collection, newDocument)

        print(newDocument)

func(datetime.timedelta(minutes=15))
