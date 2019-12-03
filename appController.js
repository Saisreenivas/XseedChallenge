'use strict';

var Match = require('./appModel.js');

exports.list_all_matches = (req,res)=>{
    Match.getAllTask((err,match)=>{

        console.log('controller');
        if (err){
            res.send(err);
            console.log('res', match);
        }else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.send(match);
        }

    })
}

exports.list_one_match = (req,res)=>{
    Match.getEachTask((err,match)=>{

        console.log('controller');
        if (err){
            res.send(err);
            console.log('res', match);
        }else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.send(match);
        }

    })
}

exports.list_all_fields = (req,res)=>{
    Match.getAllFields((err,match)=>{

        console.log('controller');
        if (err){
            res.send(err);
            console.log('res', match);
        }else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.send(match);
        }

    })
}