import React from "react"
import { Route } from "react-router-dom"

import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList} from "./animal/AnimalList"

import { CustomerProvider } from "./customer/CustomerProvider"
import {CustomerList} from "./customer/CustomerList"

import {EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeForm} from "./employee/EmployeeForm"

export const ApplicationViews = (props) => {
    return (
        <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

            <LocationProvider>
                
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>


            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                            {/* Render the animal list when http://localhost:3000/animals */}
                        <Route path="/animals">
                            <AnimalList />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                            } />
                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        }>
                                
                                
                        
                        
                                                        
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
                </EmployeeProvider> 

             <CustomerProvider>
                <Route path="/customers">

                    <CustomerList />
                </Route>
            </CustomerProvider>
        
         </>
    )
}



        
        

        
            
            
        

        