import React, {useContext, useEffect} from "react"  //usecontext works with LocationContext to get data
//import context that was et in the provider
import {LocationContext} from "./LocationProvider"
import {Location} from "./Location"



export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext) //from return statement in provider.js, object destructing const {}//and declares that variables

    useEffect(() => {
        getLocations()
    }, []
    )

    
    return (
        <article className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={ loc } />)
            }
        </article>
    )
}