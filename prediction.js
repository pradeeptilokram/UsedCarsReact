import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
export default function ComboBox() {
   
  
    const [year, setYear] = useState(0);
    const [odometer, setOdometer] = useState(0);
    const [region, setRegion] = useState({latitude:0,longitude:0});
    const [manufacturer, setManufacturer] = useState(0);
    const [cylinder, setCylinder] = useState(0);
    const [fuel, setFuel] = useState(0);
    const [titlestatus, setTitlestatus] = useState(0);
    const [transmission, setTransmission] = useState(0);
    const [drive, setDrive] = useState(0);
    const [type, setType] = useState(0);
    const [ans, setAns] = useState(0);
    const arr = [];
    const typearr=[0,0,0,0,0,0,0,0,0,0,0,0];
    const drivearr=[0,0];
    const transmissionarr =[0,0];
    const statusarr=[0,0,0,0,0];
    const fuelarr =[0,0,0,0];
    const cylinderarr =[0,0,0,0,0,0,0];
    const marr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    function postdata(){
      arr.push(year);
      arr.push(odometer);
      arr.push(region.longitude);
      arr.push(region.latitude);
      arr.push(marr);
      arr.push(cylinderarr);
      arr.push(fuelarr);
      arr.push(statusarr);
      arr.push(transmissionarr);
      arr.push(drivearr);
      arr.push(typearr);


      
      console.log("arr is " ,arr);
      console.log("before axios")
      console.log("the arr is ",arr)
      axios.post('http://localhost:5000/predict',{arr}).then((response) => {console.log("this is the response",response.data.message);
      setAns(response.data.message)}).catch(error =>{console.log("eooror is ",error)});
      
      console.log("after askis");
      
      arr.length = 0;
    }
    function typefunction(){
      console.log("the type is ",type);
      type == 'Bus' ? typearr[0]=1 :   typearr[0]=0
      {type == 'Convertible' ? typearr[1]=1 :   typearr[1]=0 }
    {type == 'Coupe' ? typearr[2]=1 :   typearr[2]=0 }
    {type == 'Hatchback' ? typearr[3]=1 :   typearr[3]=0 }
    {type == 'Mini van' ? typearr[4]=1 :   typearr[4]=0 }
    {type == 'Offroad' ? typearr[5]=1 :   typearr[5]=0 }
    {type == 'Other' ? typearr[6]=1 :   typearr[6]=0 }
    {type == 'Pickup' ? typearr[7]=1 :   typearr[7]=0 }
    {type == 'Sedan' ? typearr[8]=1 :   typearr[8]=0 }
    {type == 'Truck' ? typearr[9]=1 :   typearr[9]=0 }
    {type == 'Van' ? typearr[10]=1 :   typearr[10]=0 }
    {type == 'Wagon' ? typearr[11]=1 :   typearr[11]=0 }
    console.log(typearr)
    
    }
    function manufacturerfunction(){
      console.log("the manucaturer is ",manufacturer);
      {manufacturer == 'Alfa Romeo' ? marr[0]=1 :   marr[0]=0 }
    {manufacturer == 'Aston Martin' ? marr[1]=1 :   marr[1]=0 }
    {manufacturer == 'Audi' ? marr[2]=1 :   marr[2]=0 }
    {manufacturer == 'BMW' ? marr[3]=1 :   marr[3]=0 }
    {manufacturer == 'Buick' ? marr[4]=1 :   marr[4]=0 }
    {manufacturer == 'Cadillac' ? marr[5]=1 :   marr[5]=0 }
    {manufacturer == 'Chevrolet' ? marr[6]=1 :   marr[6]=0 }
    {manufacturer == 'Chrysler' ? marr[7]=1 :   marr[7]=0 }
    {manufacturer == 'Datsun' ? marr[8]=1 :   marr[8]=0 }
    {manufacturer == 'Dodge' ? marr[9]=1 :   marr[9]=0 }
    {manufacturer == 'Fiat' ? marr[10]=1 :   marr[10]=0 }
    {manufacturer == 'Ford' ? marr[11]=1 :   marr[11]=0 }
    {manufacturer == 'GMC' ? marr[12]=1 :   marr[12]=0 }
    {manufacturer == 'Harley Davidson' ? marr[13]=1 :   marr[13]=0 }
    {manufacturer == 'Honda' ? marr[14]=1 :   marr[14]=0 }
    {manufacturer == 'Hyundai' ? marr[15]=1 :   marr[15]=0 }
    {manufacturer == 'Infiniti' ? marr[16]=1 :   marr[16]=0 }
    {manufacturer == 'Jaguar' ? marr[17]=1 :   marr[17]=0 }
    {manufacturer == 'Jeep' ? marr[18]=1 :   marr[18]=0 }
    {manufacturer == 'Kia' ? marr[19]=1 :   marr[19]=0 }
    {manufacturer == 'Land Rover' ? marr[20]=1 :   marr[20]=0 }
    {manufacturer == 'Lexus' ? marr[21]=1 :   marr[21]=0 }
    {manufacturer == 'Lincoln' ? marr[22]=1 :   marr[22]=0 }
    {manufacturer == 'Mazda' ? marr[23]=1 :   marr[23]=0 }
    {manufacturer == 'Mercedes Benz' ? marr[24]=1 :   marr[24]=0 }
    {manufacturer == 'Mercury' ? marr[25]=1 :   marr[25]=0 }
    {manufacturer == 'Mini' ? marr[26]=1 :   marr[26]=0 }
    {manufacturer == 'Mitsubishi' ? marr[27]=1 :   marr[27]=0 }
    {manufacturer == 'Morgan' ? marr[28]=1 :   marr[28]=0 }
    {manufacturer == 'Nissan' ? marr[29]=1 :   marr[29]=0 }
    {manufacturer == 'Pontiac' ? marr[30]=1 :   marr[30]=0 }
    {manufacturer == 'Porsche' ? marr[31]=1 :   marr[31]=0 }
    {manufacturer == 'Ram' ? marr[32]=1 :   marr[32]=0 }
    {manufacturer == 'Rover' ? marr[33]=1 :   marr[33]=0 }
    {manufacturer == 'Saturn' ? marr[34]=1 :   marr[34]=0 }
    {manufacturer == 'Subaru' ? marr[35]=1 :   marr[35]=0 }
    {manufacturer == 'Tesla' ? marr[36]=1 :   marr[36]=0 }
    {manufacturer == 'Toyota' ? marr[37]=1 :   marr[37]=0 }
    {manufacturer == 'Volkswagen' ? marr[38]=1 :   marr[38]=0 }
    {manufacturer == 'Volvo' ? marr[39]=1 :   marr[39]=0 }
    console.log(marr);
    }
function cylinderfunction(){
  console.log("cylinder is ",cylinder);
  {cylinder == '12' ? cylinderarr[0]=1 :   cylinderarr[0]=0 }
  {cylinder == '3' ? cylinderarr[1]=1 :   cylinderarr[1]=0 }
  {cylinder == '4' ? cylinderarr[2]=1 :   cylinderarr[2]=0 }
  {cylinder == '5' ? cylinderarr[3]=1 :   cylinderarr[3]=0 }
  {cylinder == '6' ? cylinderarr[4]=1 :   cylinderarr[4]=0 }
  {cylinder == '8' ? cylinderarr[5]=1 :   cylinderarr[5]=0 }
  {cylinder == 'Other' ? cylinderarr[6]=1 :   cylinderarr[6]=0 }
  console.log(cylinderarr);
    
}

function fuelfunction(){
  console.log("fuel is ",fuel);
  {fuel == 'Electic' ? fuelarr[0]=1 :   fuelarr[0]=0 }
    {fuel == 'Gas' ? fuelarr[1]=1 :   fuelarr[1]=0 }
    {fuel == 'Hybrid' ? fuelarr[2]=1 :   fuelarr[2]=0 }
    {fuel == 'Others' ? fuelarr[3]=1 :   fuelarr[3]=0 }
    console.log(fuelarr);
}
function titlefunction(){
  console.log("titlestatus is ",titlestatus);

  {titlestatus == 'Lien' ? statusarr[0]=1 :   statusarr[0]=0 }
    {titlestatus == 'Missing' ? statusarr[1]=1 :   statusarr[1]=0 }
    {titlestatus == 'Parts Only' ? statusarr[2]=1 :   statusarr[2]=0 }
    {titlestatus == 'Rebuilt' ? statusarr[3]=1 :   statusarr[3]=0 }
    {titlestatus == 'Salvage' ? statusarr[4]=1 :   statusarr[4]=0 }
    console.log(statusarr);
}
function transmissionfunction(){
  console.log("transmission is ",transmission);

  {transmission == 'Manual' ? transmissionarr[0]=1 :   transmissionarr[0]=0 }
  {transmission == 'Other' ? transmissionarr[1]=1 :   transmissionarr[1]=0 }
console.log(transmissionarr);
}

function drivefunction(){
  console.log("drive is ",drive);

  {drive == 'four wheel drive' ? drivearr[0]=1 :   drivearr[0]=0 }
  {drive == 'Rear wheel drive' ? drivearr[1]=1 :   drivearr[1]=0 }
  console.log(drivearr)
}
    return (
  <div>
    
      <Autocomplete
      onChange={(event, value) => setYear(value.value)} // prints the selected value
      id="combo-box-demo"
      options={years}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Years" variant="outlined" />}
    />     <br/>
    
    
      <TextField
          required
          onChange={(event) =>   setOdometer(event.target.value)} // prints the selected value
          id="field1"
          label="Odometer"
          defaultValue="0"
          variant="outlined"
        />     <br/>     <br/>
        <Autocomplete
      onChange={(event, value) => setRegion({latitude : value.latitude, longitude :value.longitude})}
      id="combo-box-demo"
      options={regions}
      getOptionLabel={(option) => option.state}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Region" variant="outlined" />}
    />     <br/>

    <Autocomplete
      onChange={(event, value) => setManufacturer(value.title)}
      id="combo-box-demo"
      options={manufacturers}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Manufacturer" variant="outlined" />}
    />     <br/>
    {manufacturerfunction()}

    <Autocomplete
      required
      onChange={(event, value) => setCylinder(value.title)}
      id="combo-box-demo"
      options={cylinders}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cylinder" variant="outlined" />}
    />     <br/>
    {cylinderfunction()}
    
    <Autocomplete
      onChange={(event, value) => setFuel(value.title)}
      id="combo-box-demo1"
      options={fuels}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Fuel" variant="outlined" />}
    />     <br/>
    
    {fuelfunction()}
    
    <Autocomplete
      required
     onChange={(event, value) => setTitlestatus(value.title)}
      id="combo-box-demo"
      options={title_status}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Title status" variant="outlined" />}
    />     <br/>
  {titlefunction() }

   
    <Autocomplete
      required
     onChange={(event, value) => setTransmission(value.title)}
      id="combo-box-demo"
      options={transmissions}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Transmission" variant="outlined" />}
    />     <br/>
    {transmissionfunction()}
    
    <Autocomplete
      required
      onChange={(event, value) => setDrive(value.title)}
      id="combo-box-demo"
      options={drives}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Drive" variant="outlined" />}
    />     <br/>
    {drivefunction()}
    

    <Autocomplete
      required
     onChange={(event, value) => {setType(value.title)}}
      id="combo-box-demo"
      options={types}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
    />
  {typefunction()}
   
    
<br/>
      <input name="name" type="hidden" id="id"  value={arr}></input>
      <button onClick={postdata}>Check Price</button>
<br/><br/><br/>
{ans==0?(''):(ans)}
    
    </div>
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const types = [
    { title: 'Bus'},{ title: 'Convertible'},{ title: 'Coupe'},{ title: 'Hatchback'},{ title: 'Mini van'},{ title: 'Offroad'},{ title: 'Other'},{ title: 'Pickup'},{ title: 'Sedan'},{ title: 'Truck'},{ title: 'Van'},{ title: 'Wagon'}];

const drives= [{title :'four wheel drive'},{title:'Rear wheel drive'}];
const transmissions = [{title :'Manual'},{title:'Other'}];
const title_status = [{title :'Lien'},{title:'Missing'},{title:'Parts Only'},{title:'Rebuilt'},{title:'Salvage'}];

const fuels = [{title :'Electic', value:'Electic'},{title:'Gas',value:'Gas'},{title:'Hybrid', value :'Hybrid'},{title:'Others',value: 'Others'}];
const cylinders = [{title :'12'},{title:'3'},{title:'4'},{title:'5'},{title:'6'},{title:'8'},{title:'Other'}];
const manufacturers = [{title :'Alfa Romeo'},{title:'Aston Martin'},{title:'Audi'},{title:'BMW'},{title:'Buick'},{title:'Cadillac'},{title:'Chevrolet'},{title :'Chrysler'},{title:'Datsun'},{title:'Dodge'},{title:'Fiat'},{title:'Ford'},{title:'GMC'},{title:'Harley Davidson'},{title :'Honda'},{title:'Hyundai'},{title:'Infiniti'},{title:'Jaguar'},{title:'Jeep'},{title:'Kia'},{title:'Land Rover'},{title :'Lexus'},{title:'Lincoln'},{title:'Mazda'},{title:'Mercedes Benz'},{title:'Mercury'},{title:'Mini'},{title:'Mitsubishi'},{title :'Morgan'},{title:'Nissan'},{title:'Pontiac'},{title:'Porsche'},{title:'Ram'},{title:'Rover'},{title:'Saturn'},{title :'Subaru'},{title:'Tesla'},{title:'Toyota'},{title:'Volkswagen'},{title:'Volvo'}];


const years = [{title :'2000', value: 2000},{title :'2001', value: 2001},{title :'2002', value: 2002},{title :'2003', value: 2003},{title :'2004', value: 2004},{title :'2005', value: 2005},{title :'2006', value: 2006},{title :'2007', value: 2007},{title :'2008', value: 2008},{title :'2009', value: 2009},{title :'2010', value: 2010},{title :'2011', value: 2011},{title :'2012', value: 2012},{title :'2013', value: 2013},{title :'2014', value: 2014},{title :'2015', value: 2015},{title :'2016', value: 2016},{title :'2017', value: 2017},{title :'2018', value: 2018},{title :'2019', value: 2019},{title :'2020', value: 2020} ]

const regions = [
    {
      "state":"Alaska",
      "latitude":61.3850,
      "longitude":-152.2683
    },
    {
      "state":"Alabama",
      "latitude":32.7990,
      "longitude":-86.8073
    },
    {
      "state":"Arkansas",
      "latitude":34.9513,
      "longitude":-92.3809
    },
    {
      "state":"Arizona",
      "latitude":33.7712,
      "longitude":-111.3877
    },
    {
      "state":"California",
      "latitude":36.1700,
      "longitude":-119.7462
    },
    {
      "state":"Colorado",
      "latitude":39.0646,
      "longitude":-105.3272
    },
    {
      "state":"Connecticut",
      "latitude":41.5834,
      "longitude":-72.7622
    },
    {
      "state":"Delaware",
      "latitude":39.3498,
      "longitude":-75.5148
    },
    {
      "state":"Florida",
      "latitude":27.8333,
      "longitude":-81.7170
    },
    {
      "state":"Georgia",
      "latitude":32.9866,
      "longitude":-83.6487
    },
    {
      "state":"Hawaii",
      "latitude":21.1098,
      "longitude":-157.5311
    },
    {
      "state":"Iowa",
      "latitude":42.0046,
      "longitude":-93.2140
    },
    {
      "state":"Idaho",
      "latitude":44.2394,
      "longitude":-114.5103
    },
    {
      "state":"Illinois",
      "latitude":40.3363,
      "longitude":-89.0022
    },
    {
      "state":"Indiana",
      "latitude":39.8647,
      "longitude":-86.2604
    },
    {
      "state":"Kansas",
      "latitude":38.5111,
      "longitude":-96.8005
    },
    {
      "state":"Kentucky",
      "latitude":37.6690,
      "longitude":-84.6514
    },
    {
      "state":"Louisiana",
      "latitude":31.1801,
      "longitude":-91.8749
    },
    {
      "state":"Massachusetts",
      "latitude":42.2373,
      "longitude":-71.5314
    },
    {
      "state":"Maryland",
      "latitude":39.0724,
      "longitude":-76.7902
    },
    {
      "state":"Maine",
      "latitude":44.6074,
      "longitude":-69.3977
    },
    {
      "state":"Michigan",
      "latitude":43.3504,
      "longitude":-84.5603
    },
    {
      "state":"Minnesota",
      "latitude":45.7326,
      "longitude":-93.9196
    },
    {
      "state":"Missouri",
      "latitude":38.4623,
      "longitude":-92.3020
    },
    {
      "state":"Mississippi",
      "latitude":32.7673,
      "longitude":-89.6812
    },
    {
      "state":"Montana",
      "latitude":46.9048,
      "longitude":-110.3261
    },
    {
      "state":"North Carolina",
      "latitude":35.6411,
      "longitude":-79.8431
    },
    {
      "state":"North Dakota",
      "latitude":47.5362,
      "longitude":-99.7930
    },
    {
      "state":"Nebraska",
      "latitude":41.1289,
      "longitude":-98.2883
    },
    {
      "state":"New Hampshire",
      "latitude":43.4108,
      "longitude":-71.5653
    },
    {
      "state":"New Jersey",
      "latitude":40.3140,
      "longitude":-74.5089
    },
    {
      "state":"New Mexico",
      "latitude":34.8375,
      "longitude":-106.2371
    },
    {
      "state":"Nevada",
      "latitude":38.4199,
      "longitude":-117.1219
    },
    {
      "state":"New York",
      "latitude":42.1497,
      "longitude":-74.9384
    },
    {
      "state":"Ohio",
      "latitude":40.3736,
      "longitude":-82.7755
    },
    {
      "state":"Oklahoma",
      "latitude":35.5376,
      "longitude":-96.9247
    },
    {
      "state":"Oregon",
      "latitude":44.5672,
      "longitude":-122.1269
    },
    {
      "state":"Pennsylvania",
      "latitude":40.5773,
      "longitude":-77.2640
    },
    {
      "state":"Rhode Island",
      "latitude":41.6772,
      "longitude":-71.5101
    },
    {
      "state":"South Carolina",
      "latitude":33.8191,
      "longitude":-80.9066
    },
    {
      "state":"South Dakota",
      "latitude":44.2853,
      "longitude":-99.4632
    },
    {
      "state":"Tennessee",
      "latitude":35.7449,
      "longitude":-86.7489
    },
    {
      "state":"Texas",
      "latitude":31.1060,
      "longitude":-97.6475
    },
    {
      "state":"Utah",
      "latitude":40.1135,
      "longitude":-111.8535
    },
    {
      "state":"Virginia",
      "latitude":37.7680,
      "longitude":-78.2057
    },
    {
      "state":"Vermont",
      "latitude":44.0407,
      "longitude":-72.7093
    },
    {
      "state":"Washington",
      "latitude":47.3917,
      "longitude":-121.5708
    },
    {
      "state":"Wisconsin",
      "latitude":44.2563,
      "longitude":-89.6385
    },
    {
      "state":"West Virginia",
      "latitude":38.4680,
      "longitude":-80.9696
    },
    {
      "state":"Wyoming",
      "latitude":42.7475,
      "longitude":-107.2085
    }
  ];