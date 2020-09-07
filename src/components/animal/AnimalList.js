import React, {useContext, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider"
import {LocationContext} from "../location/LocationProvider"
import {CustomerContext} from "../customer/CustomerProvider"
import {Animal} from "./Animal"

export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getAnimals()
        getCustomers()
        getLocations()
        
        
    }, [])

    return (
        <article className="animals">
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    const clinic = locations.find(location => location.id === animal.locationId) || {}
                        
                        return <Animal key={animal.id} customer={owner} location={clinic} animal={animal} />})
            }
        </article>
    )
    

    // return (
    //     <article className="animals">
    //         {
    //             animals.map(animal => <Animal key={animal.id} animal={animal} />)
    //         }
    //     </article>
    // )
    // const toDom = animals.map(animal => {
    //     const owner = customers.find(customer => customer.id === animal.customerId) 
    //     const clinic = locations.find(location => location.id === animal.locationId) 
        
    //         return (
    //             <article className="animals">
    //             {
    //              toDom.map(animal => <Animal key={animal.id} location={clinic} customer={owner} animal={animal} />) 
                 
    //             }
                
    //             </article>
    //         )
            
    // })
    
    

    // return (
    //     <article className="animals">
    //         {
    //             animals.map(animal => {
    //                 const owner = customers.find(customer => customer.id === animal.customerId) || {}
    //                 const clinic = locations.find(location => location.id === animal.locationId) || {}
    //                 return <section className="animal" key={animal.id}>
    //                             <h3 className="animal__name">{animal.name}</h3>
    //                             <div className="animal__breed">Breed: {animal.breed}</div>
    //                             <div className="animal__location">{clinic.name}</div>
    //                             <div className="animal__owner">Owner: {owner.name}</div>
    //                         </section>
    //             })
    //         }
    //     </article>

    // )





}