// import React, { useEffect, useState } from 'react'
//  import {View} from 'react-native'

// const Flatlist = () => {
//   const [data,setData] = useState([]);
//   const getAPIData = async()=>{
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result)
//   }
//   useEffect(()=>{
//     getAPIData()
//   })
//   return (
//   <View>
//     <h1 className='font-semibold text-2xl'>Flatlist with FetchAPI</h1>
//   {
//     data.length?
//     <Flatlist
//     data={data}
//     renderItem={({item})=>
//     <View>
//     <h1>{item.id}</h1>
//     </View>
//     }
//   />
//   :null
//   }
//   </View>
  
//   )}

// export default Flatlist
import React, { useEffect, useState } from 'react';

const Flatlist = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className='scr'>
      <h1 className="font-semibold text-3xl text-center">Flatlist with FetchAPI</h1>
      {
        data.length ? (
          <ul className='' >
            {data.map(item => (
              <li key={item.id} className=' mx-4 lg:mx-96 border-4 text-center justify-center my-4 max-auto  border-blue-300 bg-gray-300 text-black text-lg'>
              <h2 className='text-3xl '>{item.id}</h2>
                <h2 className='text-2xl mt-2'>{item.title}</h2>
                <p className='mt-2'>{item.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )
      }
    </div>
  );
};

export default Flatlist;
