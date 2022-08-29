import React from 'react'
import useStyles from './styles';

function Termexam({checked}) {
    const classes = useStyles();
    return (
        <div>
            <table className={classes.table}>
                      <tr >
                          <td className={!checked ? classes.tablehead : classes.darktablehead} align="center">No.</td>
                          <td  className={!checked ? classes.tablehead : classes.darktablehead} align="center">Date</td>
                          <td className={!checked ? classes.tablehead : classes.darktablehead}   align="center">Date</td>
                          <td  className={!checked ? classes.tablehead : classes.darktablehead}  align="center">Maxm.M</td>
                          <td  className={!checked ? classes.tablehead : classes.darktablehead}  align="center">Marks Obtained</td>
                      </tr>
                      <tr className={!checked ? classes.tablerow : classes.darktablerow} >
                          <td className={!checked ? classes.tabledata : classes.darktabledata}align="center">1.</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata} align="center">mid term exam</td>
                          <td className={!checked ? classes.tabledata : classes.darktabledata}   align="center">25/03/2021</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata}  align="center">30</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata}  align="center">25</td>
                      </tr>
                      <tr className={!checked ? classes.tablerow : classes.darktablerow} >
                          <td className={!checked ? classes.tabledata : classes.darktabledata}align="center">1.</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata} align="center">end sem exam</td>
                          <td className={!checked ? classes.tabledata : classes.darktabledata}   align="center">25/03/2021</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata}  align="center">50</td>
                          <td  className={!checked ? classes.tabledata : classes.darktabledata}  align="center">45</td>
                      </tr>
                                  
                    </table>
        </div>
    )
}

export default Termexam
