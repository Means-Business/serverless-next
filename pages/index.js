import React from 'react'
import {withAuth} from '../lib/auth/service'
import Layout from '../components/layout'

export default class Index extends React.Component {
  render () {
    return (
      <Layout>
        <div className='Home'>
          <div className='lander'>
            <h1><span style={{color: '#ffc107'}}>&#x26A1;</span>Serverless Next Notes</h1>
            <p>A simple note taking app</p>
          </div>
        </div>
        <style jsx>{`

          .Home .lander {
            padding: 80px 0;
            text-align: center;
          }

          .Home .lander h1 {
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
          }

          .Home .lander p {
            color: #999;
          }

        `}</style>
      </Layout>
    )
  }
}
