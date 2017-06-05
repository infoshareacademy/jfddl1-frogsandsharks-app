import React from 'react'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'

const GenericTable = (props) => (
  <Table striped bordered condensed hover>
    <thead>
    <tr>
      {
        props.config.map(
          (item, index) => <th className="listEffect" key={index}>{item.label}</th>
        )
      }
    </tr>
    </thead>
    <tbody>
    {
      props.data.map(
        dataItem => (
          <tr key={dataItem.uid}>
            {
              props.config.map(
                configItem => configItem.name
              ).map(
                (name, index) => (
                  <td className="lista" key={index}>
                    {
                      (props.day !== null && props.meal !== null) ?
                        <Link to={props.linkPrefix + '/' + props.day + '/' + props.meal + '/' + dataItem.uid}>
                          {dataItem[name]}
                        </Link> :
                        <Link to={props.linkPrefix + '/' + dataItem.uid}>
                          {dataItem[name]}
                        </Link>
                    }
                  </td>
                )
              )
            }
          </tr>
        )
      )
    }
    </tbody>
  </Table>
)

export default GenericTable