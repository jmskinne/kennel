import React, { useState,  } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([]) //locations = [] setLocations is function is used if value of locations is changed,
    //you cannot change locations without usins setLocations, you cannot manually change locations = [1,2,3] have to use setLocations[1,2,3]

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json()) 
            .then(setLocations) //destructing array on line 13
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (        //context acts as export function to be able to use data within different components    
        <LocationContext.Provider value={{               //first curly brackets lets react know VanillaJS is coming, second is object
            locations, addLocation, getLocations
        }}>
            {props.children} 
        </LocationContext.Provider> //children are getLocations, addLocation of the main function LocationProvider(props)
    )
}