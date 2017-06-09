'use strict'

// tests for authentication
// Generated by serverless-jest-plugin

const mod = require('./../aws/authentication')

const jestPlugin = require('serverless-jest-plugin')
const lambdaWrapper = jestPlugin.lambdaWrapper
const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' })

describe('authentication', () => {
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