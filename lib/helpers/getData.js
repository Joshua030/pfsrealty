

// export const getData = async() => {
//         try {
//           const response = await fetch('/api/get-property?limit=12');
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           const data = await response.json();
//           return data;
//         } catch (error) {
//           console.error('Error fetching data:', error);
//           throw error;
//         }
//       }

      // export const getFilterData = async (parameter, type, currentPage, pageSize, proyectos,rooms) => {
      //   try {
      //     const response = await fetch(`/api/get-filter-property`, {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({
      //         parameter,
      //         type,
      //         page:currentPage,
      //         pageSize,
      //         proyectos,
      //         rooms
      //       })
      //     });
      //     if (!response.ok) {
      //       // console.log(response);
      //       throw new Error('Network response was not ok');
      //     }
      //     const data = await response.json();
      //     return data;
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //     throw error;
      //   }
      // }
      

