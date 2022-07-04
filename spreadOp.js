let data = {
    id: 1,
    name: 'budi pratama',
    gender: 'female',
    height: '165cm',
    educational: [  
      {
          periode: '2013-2016',
          school: 'Kalam kudu High School',
          major: '-'

      }
    ],
    phone: {
     primari : '0812312323',
    secondary : '008234243'
  }
}
let newEducation=
{
    periode: '2016-2020',
    school: 'state University Jakarta',
    major: 'Accountancy'
}
let myData = {
    id: 1,
    name: 'Aditya Triansyah',
    gender: 'male',
    height: '175cm',
    educational: 'Degree',
    phone : {
        primari : '085161461771',
        secondary : '085771776235'
    }
}
// let updateMyData = {...data, ...myData}
// console.log(updateMyData)

// // //Mengambil data primari dan secondary tanpa destructuring

// // console.log(`${data.phone.primari}\n${data.phone.secondary}`) 

// // //Mengambil data primari dan secondary menggunakan destructuring
// console.log(`${data.phone.primari}\n${data.phone.secondary}`)

// // //Menggabungkan data dan newEducation menggunakan spread operator
// // let newData = {...data, ...newEducation}
// // console.log(newData)

