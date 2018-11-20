const expect = require("chai").expect;
const assert = require('chai').assert;
const test = require('../public/javascript/test.js')
// const resetFields = require('../public/javascript/main.js').resetFields;

describe('resetFields', function(){
    it('should clear the userInput array', function(){
        let result = test.resetFields();
        assert.equal(result,null)
    })
})

