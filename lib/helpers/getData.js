export const getData = async() => {
        try {
          const response = await fetch('http://localhost:3000/api/get-property?limit=12');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }

