import React from 'react'
import { MapContainer , TileLayer , Marker , Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PieChart from './Charts/PieChartData'

export default function Map() {
    const center = [25,45];
    const zoom = 5;
    const markers = [
        {
            geoCode:[24.68773, 46.72185],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Riyadh</h4></div>
        },
        {
            geoCode:[21.42664, 39.82563],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Mecca</h4></div>
        },
        {
            geoCode:[24.46861, 39.61417],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Medina</h4></div>
        },
        {
            geoCode:[29.499998, 39.499998],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Jawf</h4></div>
        },
        {
            geoCode:[28.3998, 36.57151],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Tabuk</h4></div>
        },
        {
            geoCode:[30.0, 42.499998],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Northern Borders</h4></div>
        },
        {
            geoCode:[27.523647, 41.696632],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Hail</h4></div>
        },
        {
            geoCode:[26.094088, 43.973454],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Al Qassim</h4></div>
        },
        {
            geoCode:[22.499998, 51.0],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Eastern Province</h4></div>
        },
        {
            geoCode:[17.49326, 44.12766],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Najran</h4></div>
        },
        {
            geoCode:[20.01288, 41.46767],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Al Bahah</h4></div>
        },
        {
            geoCode:[19.0, 43.0],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Asir</h4></div>
        },
        {
            geoCode:[16.909683, 42.567902],
            popUp: <div style={{width:'200px'}}><PieChart /><h4>Jizan</h4></div>
        },
        {
            geoCode:[17.49326, 44.12766],
            popUp:<div style={{width:'200px'}}><PieChart /><h4>Najran</h4></div>
        },
    ]
    function handleMarkers(){
        let data = markers.map(marker=>
            <Marker position={marker.geoCode}>
                <Popup style={{width:'200px'}}> {marker.popUp} </Popup>
            </Marker>)
        return data
    }
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {markers.map(marker=>
            <Marker position={marker.geoCode}>
                <Popup> {marker.popUp} </Popup>
            </Marker>)} */}
            {handleMarkers()}
    </MapContainer>
  )
}
