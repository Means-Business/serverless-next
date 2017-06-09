'use strict'

// tests for web
// Generated by serverless-jest-plugin

const mod = require('../aws/web')

const jestPlugin = require('serverless-jest-plugin')
const lambdaWrapper = jestPlugin.lambdaWrapper
const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' })

describe('web', () => {
  beforeAll((done) => {
//  lambdaWrapper.init(liveFunction) // Run the deployed lambda

    done()
  })

  it('implement tests here', () => {
    return wrapped.run({}).then((response) => {
      expect(response).toBeDefined()
    })
  })
})