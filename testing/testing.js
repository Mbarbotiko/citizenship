const expect = require("chai").expect;
const assert = require('chai').assert;
const main = require('../public/javascript/main.js')
// const resetFields = require('../public/javascript/main.js').resetFields;

describe('resetFields', function(){
    it('should clear the userInput array', function(){
        let result = main.resetFields();
        assert.equal(result,'[]')
    })
})

