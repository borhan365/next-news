
import React from 'react'

function Items(props) {
    return (
        <>
        <Grid item xs={3}>
            <Box className={classes.root}>
                <div className={classes.CapitalThumb}>
                    <img src={props.Thumb} alt={props.Title}/>
                </div>

                <div>
                    <Typography className={classes.Link} color="inherit" component={Link} to="/single">
                        <Typography className={classes.CapitalTitlte} variant="h3">
                        {props.Title}
                        </Typography>

                        <Typography className={classes.CapitalDesc} variant="subtitle1">
                            {props.Desc}
                        </Typography>
                    </Typography>
                    
                    <Typography className={classes.CapitalDate} variant="subtitle2">
                        {props.Date}
                    </Typography>
                    
                </div>
            </Box>
        </Grid>
        </>
    )
}

export default Items
