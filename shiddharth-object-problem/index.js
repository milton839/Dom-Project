 //this is the array we have to map through
 const Shiftsa = [
        {
          shift_id: 665,
          start_time: '2021-07-14T10:00:00.000Z',
          end_time: '2021-07-14T17:30:00.000Z',
          routes: [
            {
              route_id: 763,
              is_completed: 0,
              is_active: 1,
              current_stop_sequence: 5,
              departure_time: null
            }
          ],
          bus: {
            bus_number: 81
          },
          driver: {
            driver_name: 'Justin Hunt'
          },
          status: 'ongoing'
        },
        {
          shift_id: 1395,
          start_time: '2022-01-10T12:00:00.000Z',
          end_time: '2022-01-11T00:00:00.000Z',
          routes: [
            {
              route_id: 903,
              is_completed: 1,
              is_active: 0,
              current_stop_sequence: 3,
              departure_time: '2022-01-10T18:17:37.000Z'
            },
            {
              route_id: 904,
              is_completed: 0,
              is_active: 1,
              current_stop_sequence: 1,
              departure_time: '2022-01-10T19:17:37.000Z'
            }
          ],
          bus: {
            bus_number: 3
          },
          driver: {
            driver_name: 'Kamil'
          },
          status: 'ongoing'
        },
        {
          shift_id: 1412,
          start_time: '2022-01-11T18:05:00.000Z',
          end_time: '2022-01-12T05:00:00.000Z',
          routes: [
            {
              route_id: 908,
              is_completed: 1,
              is_active: 0,
              current_stop_sequence: 3,
              departure_time: '2022-01-11T18:20:16.000Z'
            },
            {
              route_id: 909,
              is_completed: 0,
              is_active: 1,
              current_stop_sequence: 2,
              departure_time: '2022-01-11T18:59:23.000Z'
            },
            {
              route_id: 910,
              is_completed: 1,
              is_active: 0,
              current_stop_sequence: 5,
              departure_time: '2022-01-11T19:44:44.000Z'
            },
            {
              route_id: 911,
              is_completed: 1,
              is_active: 0,
              current_stop_sequence: 5,
              departure_time: '2022-01-11T20:45:37.000Z'
            }
          ],
          bus: {
            bus_number: 83
          },
          driver: {
            driver_name: 'Winnie'
          },
          status: 'ongoing'
        },
        {
          shift_id: 1420,
          start_time: '2022-01-18T11:00:00.000Z',
          end_time: '2022-01-19T02:00:00.000Z',
          routes: [
            {
              route_id: 918,
              is_completed: 1,
              is_active: 1,
              current_stop_sequence: 0,
              departure_time: null
            }
          ],
          bus: {
            bus_number: 81
          },
          driver: {
            driver_name: 'Benjamin Hudson'
          },
          status: 'ongoing'
        },
        {
          shift_id: 1428,
          start_time: '2022-01-26T11:00:00.000Z',
          end_time: '2022-01-27T02:00:00.000Z',
          routes: [
            {
              route_id: 922,
              is_completed: 0,
              is_active: 0,
              current_stop_sequence: 0,
              departure_time: '2022-01-26T17:40:08.000Z'
            },
            {
              route_id: 927,
              is_completed: 1,
              is_active: 1,
              current_stop_sequence: 0,
              departure_time: null
            }
          ],
          bus: {
            bus_number: 9
          },
          driver: {
            driver_name: 'Benjamin Hudson'
          },
          status: 'ongoing'
        },
        {
          shift_id: 1503,
          start_time: '2022-02-18T13:00:00.000Z',
          end_time: '2022-02-19T01:00:00.000Z',
          routes: [
            {
              route_id: 973,
              is_completed: 1,
              is_active: 1,
              current_stop_sequence: 0,
              departure_time: null
            }
          ],
          bus: {
            bus_number: 81
          },
          driver: {
            driver_name: 'Benjamin Hudson'
          },
          status: 'ongoing'
        }
      ];


      // we have to find and take ot the routes that have route.departure_time = null 
      //route.is_completed == 1 and route.current_stop_sequence === 0

      // so we just have to filter out routes that have this otherwise return everything else
// console.log(Shiftsa);
//       const shiftsData = Shiftsa.map((row, index) => {
//           const rowData = row.routes;
//         //   console.log(rowData, index);
//           rowData.map((data, i)=>{
//               if (typeof rowData[i].departure_time === "string") {
//                   console.log(data);
//               }
//           })
//       });
// console.log(shiftsData);
      // this is what i wrote

    //   for (let i = 0; i < Shiftsa.length; i++) {
    //       const element = Shiftsa[i].routes;
    //       for (let index = 0; index < element.length; index++) {
    //           const element1 = element[index];
    //           if (!element1.departure_time) {
    //             //   console.log(element1, index, element);
    //               element.splice(index, 1);
    //           }
    //       }
    //   }
    //   console.log(Shiftsa);


Shiftsa.map((row, rowIndex) =>{
    row.routes.filter((stuff, stufIndex)=>{
        if(!stuff.departure_time && stuff.is_completed == 1 && stuff.current_stop_sequence == 0){
            Shiftsa[rowIndex].routes.splice(stufIndex, 1)
        }
        
    })
})

// console.log(Shiftsa)

