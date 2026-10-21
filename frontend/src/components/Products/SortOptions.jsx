import { useSearchParams } from "react-router-dom"

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e)=> {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams)

  }
  return (
    
    <div className="mb-4 items-center justify-end flex " > {/*add flex*/}
       <select 
       id="sort" 
       onChange={handleSortChange}
       value={searchParams.get("sortBy") || ""}
       className="border bg-amber-950 text-amber-50 p-2 rounded-md focus:outline-none">
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popular</option>

       </select>
    </div>
  )
}

export default SortOptions


