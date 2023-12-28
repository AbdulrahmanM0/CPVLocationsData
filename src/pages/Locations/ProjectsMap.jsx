import React, { useEffect, useState } from 'react'
import mapImage from '../../assets/images/Map.png'
import PieChart from './Charts/PieChart'


export default function ProjectsMap() {
  const [cord,setCord] = useState({x:0,y:0})
  const [regionTitle,setRegionTitle] = useState('')
  const [targetRegion, setTargetRegion] = useState(null)
  const getTarget = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    setCord({x,y,})
    console.log(x,y)
  }

  const handleRagionTitle = (e) => {
      console.log(e.target.title)
      setRegionTitle(e.target.title)
      setTargetRegion(e.target.id)
  }
  console.log(targetRegion)

  const [chartPositions,setChartPositions] = useState(null)
  useEffect(()=>{
    if(targetRegion == 1){
      setChartPositions({
        position : {
          top: '2px',
          left: '235px'
          }
      })
    }
    else if (targetRegion == 0){
      setChartPositions({
        position : {
          top: '190px',
          left: '490px'
          }
      })
    }
    else if (targetRegion == 2){
      setChartPositions({
        position : {
          top: '8px',
          left: '84px'
          }
      })
    }
    else if (targetRegion == 3){
      setChartPositions({
        position : {
          top: '260px',
          left: '367px'
          }
      })
    }
    else if (targetRegion == 4){
      setChartPositions({
        position : {
          top: '96px',
          left: '33px'
          }
      })
    }
    else if (targetRegion == 5){
      setChartPositions({
        position : {
          top: '476px',
          left: '376px'
          }
      })
    }
    else if (targetRegion == 6){
      setChartPositions({
        position : {
          top: '173px',
          left: '271px'
          }
      })
    }
    else if (targetRegion == 7){
      setChartPositions({
        position : {
          top: '114px',
          left: '212px'
          }
      })
    }
    else if (targetRegion == 8){
      setChartPositions({
        position : {
          top: '330px',
          left: '203px'
          }
      })
    }
    else if (targetRegion == 9){
      setChartPositions({
        position : {
          top: '422px',
          left: '268px'
          }
      })
    }
    else if (targetRegion == 10){
      setChartPositions({
        position : {
          top: '512px',
          left: '268px'
          }
      })
    }
    else if (targetRegion == 11){
      setChartPositions({
        position : {
          top: '392px',
          left: '217px'
          }
      })
    }
    else if (targetRegion == 12){
      setChartPositions({
        position : {
          top: '207px',
          left: '134px'
          }
      })
    }
  },[targetRegion])

  return (
      <>
        <div>
            <h4>
              {regionTitle}
            </h4>
        </div>
        <div className='d-flex justify-content-center'>
        <div style={{position: 'relative'}}>
        {chartPositions && 
          <div         
          style={{
              overflow:'hidden',
              backgroundColor:'transparent',
              position: 'absolute',
              zIndex: '10',
              // width: '60px',
              // height: '160px',
              ...chartPositions.position,
            }}>
              <div>
                <PieChart />
              </div>
          </div>
}
          <img src={mapImage} usemap="#image_map" style={{width:'738px',height:'600px'}}/>
          <map  name="image_map" onClick={(e)=>getTarget(e)} style={{position:'relative',zIndex:'1000'}}>
            <area id='0' onClick={(e)=>handleRagionTitle(e)} alt="Eastern Province" title="Eastern Province" coords="453,570 513,523 639,497 716,471 738,397 723,371 629,361 542,246 547,232 539,212 486,146 456,146 452,127 420,126 391,136 365,181 377,198 414,216 452,236 457,293 484,322 " shape="polygon" />
            <area id='1' onClick={(e)=>handleRagionTitle(e)} alt="Northern Borders" title="Northern Borders" coords="120,19 161,5 208,11 283,60 357,120 419,126 390,136 361,188 351,175 336,175 322,151 313,155 299,152 296,143 285,146 274,137 243,135 230,134 212,136 218,127 218,112 261,84 242,68 222,60 192,57 160,50 130,55 115,40" shape="polygon" />
            <area id='2' onClick={(e)=>handleRagionTitle(e)} alt="Al-Jawf" title="Al-Jawf"   coords="157,160 212,134 217,115 259,84 245,67 230,65 221,57 191,59 164,50 127,54 115,36 120,19 87,28 122,67 106,80 103,88 75,93 52,121 17,113 13,136 33,133 50,130 66,144 86,141 102,146 107,133 114,133 117,153 132,158 146,161 " shape="polygon" />
            <area id='3' onClick={(e)=>handleRagionTitle(e)} alt="Riyadh" title="Riyadh" coords="332,474 367,500 461,489 482,325 456,292 451,238 371,195 365,185 353,194 361,207 345,222 348,236 361,262 334,262 318,277 305,280 295,295 268,295 261,322 275,361 298,362 299,375 317,376 311,418 335,451 331,471 367,499 347,484 " shape="polygon" />
            <area id='4' onClick={(e)=>handleRagionTitle(e)} alt="Tabuk" title="Tabuk" coords="1,164 12,133 30,132 54,129 67,150 84,143 103,146 106,136 116,134 114,154 141,160 148,164 154,160 181,174 191,197 198,200 187,211 186,220 182,217 163,220 151,210 133,213 127,204 121,203 113,191 103,195 96,190 77,197 85,203 84,218 96,224 89,236 96,243 112,252 122,273 119,290 98,298 25,170 " shape="polygon" />
            <area id='5' onClick={(e)=>handleRagionTitle(e)} alt="Najran" title="Najran"  coords="438,583 450,578 462,487 370,501 350,490 344,500 345,515 333,519 318,535 321,566 371,567 "  shape="polygon" />
            <area id='6' onClick={(e)=>handleRagionTitle(e)} alt="Qassim" title="Qassim"  coords="264,297 271,292 291,296 302,292 298,287 305,276 326,273 332,261 359,262 351,237 344,232 344,219 355,213 361,206 355,199 348,204 337,203 328,194 307,203 304,211 278,226 276,237 268,237 268,249 259,249 261,257 243,262 250,265 249,280 257,282 " shape="polygon" />
            <area id='7' onClick={(e)=>handleRagionTitle(e)} alt="Hail" title="Hail" coords="189,271 206,269 215,267 223,259 242,263 261,254 259,247 268,246 269,235 274,235 281,222 304,209 313,198 330,191 341,204 353,200 354,190 357,184 347,176 335,175 323,152 311,157 298,152 294,144 285,148 274,137 250,137 237,134 215,138 207,136 155,161 175,166 187,176 189,194 200,198 185,220 183,231 189,232 " shape="polygon" />
            <area id='8' onClick={(e)=>handleRagionTitle(e)} alt="Mecca " title="Mecca " coords="248,539 256,530 251,514 239,514 239,500 254,497 254,478 242,478 237,495 225,485 222,471 217,467 228,461 234,450 237,440 244,447 254,446 265,449 265,449 270,457 304,436 311,439 319,434 309,422 313,378 297,378 294,363 275,361 259,324 252,325 254,337 237,344 243,350 214,375 197,379 190,364 187,353 172,356 152,342 146,344 162,382 154,404 182,457 209,470 " shape="polygon" />
            <area id='9' onClick={(e)=>handleRagionTitle(e)} alt="Asir" title="Asir" coords="308,560 322,565 318,538 334,517 344,501 351,491 332,449 318,434 308,440 288,444 270,460 264,451 261,462 252,476 260,481 255,502 242,504 242,517 246,517 255,517 257,530 262,540 282,552 285,555 293,543 " shape="polygon" />        
            <area id='10' onClick={(e)=>handleRagionTitle(e)} alt="Jazan" title="Jazan" coords="291,598 304,589 304,572 309,562 292,547 285,558 257,541 258,532 246,538 255,552 271,569 " shape="polygon" />
            <area id='11' onClick={(e)=>handleRagionTitle(e)} alt="Bahah" title="Bahah"  coords="251,476 255,462 263,460 260,446 244,449 236,442 235,457 218,466 226,476 226,487 237,495 242,480 " shape="polygon" />
            <area id='12' onClick={(e)=>handleRagionTitle(e)} alt="Medina" title="Medina" coords="196,376 207,374 213,375 242,349 233,345 254,333 253,322 261,322 265,298 258,285 248,279 250,265 222,261 213,270 194,271 189,269 191,233 184,229 185,220 179,218 162,220 148,210 132,216 111,192 103,198 96,193 79,197 86,200 86,216 96,222 91,232 98,242 112,250 119,265 124,274 122,292 112,292 98,299 103,311 146,343 157,343 168,352 174,356 189,355 " shape="polygon"></area>
          </map>
        </div>


        
        </div>
      </>
  )
}
