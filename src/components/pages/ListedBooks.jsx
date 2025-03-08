import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './storedComponent/ReadList';
import Wishlist from './storedComponent/Wishlist';
import { useState } from 'react';
const ListedBooks = () => {
  const [sortData,setSortData] = useState('')
  console.log(sortData)
  return (
    <div>
      <h1 className='text-center text-5xl py-7 font-extrabold'>books</h1>
      <div className='flex items-center justify-center'>
        <select defaultValue="Pick a text editor" onChange={(e) => setSortData(e.target.value)} className="  select select-primary">
          <option disabled={true}>Pick a text editor</option>
          <option >All</option>
          <option >Poetry</option>
          <option >Fiction</option>
          <option >Non-Fiction</option>
        </select>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <ReadList sortData={sortData}></ReadList>
          </TabPanel>
          <TabPanel>
            <Wishlist sortData={sortData}></Wishlist>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default ListedBooks