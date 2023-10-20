import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const {filters , setFilters} = useFilters()

    const categoryFilterId = useId()
    const minPriceFilterId = useId()


    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice : event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category : event.target.value
        }))
    }


    return (
        <section className="filters">

            <div className="">
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                type="range" 
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>{filters.minPrice}$</span>
            </div>

            <div className="">
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">PCs</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}