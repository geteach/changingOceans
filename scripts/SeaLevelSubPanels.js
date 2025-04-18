function subpanel() {
    document.querySelectorAll('.cardLink').forEach(cardLink => {
        cardLink.addEventListener('click', function () {
            hideLayers();
            let media = document.querySelector('.mediaContain');
            let content = document.querySelector('.content');
            let panel = cardLink.getAttribute('value')
            if (panel == 'Aerosol') {
                media.innerHTML =
                `<div class="slideshow-container">
                    <div class="mySlides fade" value="031A3AC6051DC4237116Show">
                        <img class="image" src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png">
                        <div class="captionDiv">
                            <div class="caption">Aerosol Earth - 8/23/2018</div>
                        </div>
                    </div>
                </div>`
                content.innerHTML = 
                `<div class="title">
                        Aerosol Earth - 8/23/2018
                    </div>
                    <div class="description">
                        <img src="https://geteach.com/scripts/newearth/changingoceans/legends/aerosolLengend.png" style="width:100%;max-width:250px;"/>
                        <p class="text" style="margin-top:16px;">The visualization above highlights GEOS FP model output for aerosols on August 23, 2018. On that day, huge plumes of smoke drifted over North America and Africa, three different tropical cyclones churned in the Pacific Ocean, and large clouds of dust blew over deserts in Africa and Asia. The storms are visible within giant swirls of sea salt aerosol (blue), which winds loft into the air as part of sea spray. Black carbon particles (red) are among the particles emitted by fires; vehicle and factory emissions are another common source. Particles the model classified as dust are shown in purple. The visualization includes a layer of night light data collected by the day-night band of the Visible Infrared Imaging Radiometer Suite (VIIRS) on Suomi NPP that shows the locations of towns and cities.</p>
                        <p class="title" style="padding:0">Learn more about...</p>
                        <div class="cardContainer">
                            <div class="cardLink" value="Aerosol">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png)"></div>
                                <div class="selectCardTitle">
                                    <div class="selectCardText">Aerosol 8/23/2021</div>
                                </div>
                            </div>
                            <div class="cardLink" value="HeatContent">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Heat Content</div>
                                </div>
                            </div>
                            <div class="cardLink" value="seaTemp">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Sea Surface Temp.</div>
                                </div>
                            </div>
                            <div class="cardLink" value="seaLevel">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Sea Surface Height</div>
                                </div>
                            </div>
                        </div>
                        <p class="text"><i>Credit:</i></br>Aerosol Overlay: <a href="https://earthobservatory.nasa.gov/images/92654/just-another-day-on-aerosol-earth" target="_blank">NASA Earth Observatory</a>
                        </p>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                            Back to story
                        </button>
                    </div>`
                carousel();
                subpanel();
                let initOverlay = "031A3AC6051DC4237116Show"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'HeatContent') {
                media.innerHTML = 
                `<div class="slideshow-container">
                    <div class="mySlides fade" value="0D544130CD1DC06D013BShow">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContent1960Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean Heat Content - 1960</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="00708249C31DC06EA3B3Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContent1980Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean Heat Content - 1980</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="0C24206D4D1DC06F5D92Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContent2000Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean Heat Content - 2000</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="06BE8162931DC06FFA3DShow">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContent2011Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean Heat Content - 2011</div>
                        </div>
                    </div>
                    <a class="prev minusSlidesClass">&#10094;</a>
                    <a class="next plusSlidesClass">&#10095;</a>
                </div>`
                content.innerHTML = 
                `<div class="title">
                    Ocean Heat Content
                </div>
                <div class="snippet">
                    Click the image carousel arrows to change layers
                </div>
                <div class="description">
                    <img src="https://geteach.com/scripts/newearth/changingoceans/legends/WOAQLegend.png" style="width:100%;max-width:250px;"/>
                    <p class="text" style="margin-top:16px;">The ocean stores vast amounts of heat - far more than the land or atmosphere. This data shows areas of the ocean that are gaining or losing heat energy. Orange indicates areas where a net increase in stored heat occured; grey were more heat was lost.</p>
                    <p class="title" style="padding:0">Learn more about...</p>
                    <div class="cardContainer">
                        <div class="cardLink active" value="Aerosol">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Aerosol 8/23/2021</div>
                            </div>
                        </div>
                        <div class="cardLink" value="HeatContent">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png)"></div>
                            <div class="selectCardTitle">
                                <div class="selectCardText">Heat Content</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaTemp">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Sea Surface Temp.</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaLevel">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Sea Surface Height</div>
                            </div>
                        </div>
                    </div>
                    <p class="text"><i>Credit:</i></br>Heat Content Overlay: <a href="https://www.nnvl.noaa.gov/view/#WOAQ" target="_blank">NOAA</a>
                    </p>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                        Back to story
                    </button>
                </div>`
                carousel();
                subpanel();
                let initOverlay = "06BE8162931DC06FFA3DShow"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'seaTemp') {
                media.innerHTML =
                `<div class="slideshow-container">
                    <div class="mySlides fade" value="05CAC442C71DC071C9F7Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF1985Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Sea Surface Temperature - 1985</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="06BCFBC3DC1DC0727942Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF1995Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Sea Surface Temperature - 1995</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="0F64F33B3B1DC07302B8Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2005Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Sea Surface Temperature - 2005</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="03A1ABD0001DC073A969Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Sea Surface Temperature - 2015</div>
                        </div>
                    </div>
                    <a class="prev minusSlidesClass">&#10094;</a>
                    <a class="next plusSlidesClass">&#10095;</a>
                </div>`
                content.innerHTML = 
                `<div class="title">
                    Sea Surface Temperature
                </div>
                <div class="snippet">
                    Click the image carousel arrows to change layers
                </div>
                <div class="description">
                    <img src="https://geteach.com/scripts/newearth/changingoceans/legends/seaSurfLegend.png" style="width:100%;max-width:250px;"/>
                    <p class="text" style="margin-top:16px;">Sea surface temperature is a major factor for predicting weather. Where SST is relatively high, water evaporates easily, adding moisture and heat energy to the atmosphere.</p>
                    <p class="title" style="padding:0">Learn more about...</p>
                    <div class="cardContainer">
                        <div class="cardLink active" value="Aerosol">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Aerosol 8/23/2021</div>
                            </div>
                        </div>
                        <div class="cardLink" value="HeatContent">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Heat Content</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaTemp">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png)"></div>
                            <div class="selectCardTitle">
                                <div class="selectCardText">Sea Surface Temp.</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaLevel">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Sea Surface Height</div>
                            </div>
                        </div>
                    </div>
                    <p class="text"><i>Credit:</i></br>Sea Surface Temperature Overlay: <a href="https://www.nnvl.noaa.gov/view/#SURF" target="_blank">NOAA</a>
                    </p>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                        Back to story
                    </button>
                </div>`
                carousel();
                subpanel();
                let initOverlay = "03A1ABD0001DC073A969Show"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'seaLevel') {
                media.innerHTML =
                `<div class="slideshow-container">
                    <div class="mySlides fade" value="01016629121DC075CCF7Show">
                        <a href="https://www.youtube.com/watch?v=z2UKvrU5rOk">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaLevelThumb.jpg" width="100%">
                            <div class="playoverlay" style="display:block;"></div>
                            <div class="captionDiv">
                                <div class="caption" >22-Years Sea Surface Height</div>
                            </div>
                        </a>
                    </div>
                    <div class="mySlides fade" value="01016629121DC075CCF7Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png">
                        <div class="captionDiv">
                            <div class="caption" >22-Years Sea Surface Height</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="01016629121DC075CCF7Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/sealevel/sea-level_figure1_2021.png">
                        <div class="captionDiv">
                            <div class="caption" >Sea Level Change 1880 - 2020</div>
                        </div>
                    </div>
                    <a class="prev minusSlidesClass">&#10094;</a>
                    <a class="next plusSlidesClass">&#10095;</a>
                </div>`
                content.innerHTML = 
                `<div class="title">
                    Sea Surface Height Change
                </div>
                <div class="description">
                    <img src="https://geteach.com/scripts/newearth/changingoceans/legends/seaChangeLegend.png" style="width:100%;max-width:250px;"/>
                    <p class="text" style="margin-top:16px;">This visualization shows total sea level change between 1992 and 2014, based on data collected from the TOPEX/Poseidon, Jason-1, and Jason-2 satellites. Blue regions are where sea level has gone down, and orange/red regions are where sea level has gone up. Since 1992, seas around the world have risen an average of nearly 3 inches.</p>
                    <p class="text">The color range for this visualization is -7 cm to +7 cm (-2.76 inches to +2.76 inches), though measured data extends above and below 7cm(2.76 inches). This particular range was chosen to highlight variations in sea level change.</p>
                    <p class="title" style="padding:0">Learn more about...</p>
                    <div class="cardContainer">
                        <div class="cardLink active" value="Aerosol">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Aerosol 8/23/2021</div>
                            </div>
                        </div>
                            <div class="cardLink" value="HeatContent">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Heat Content</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaTemp">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Sea Surface Temp.</div>
                            </div>
                        </div>
                        <div class="cardLink" value="seaLevel">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png)"></div>
                            <div class="selectCardTitle">
                                <div class="selectCardText">Sea Surface Height</div>
                            </div>
                        </div>
                    </div>
                    <p class="text"><i>Credit:</i></br>Sea Surface Height Overlay: <a href="https://svs.gsfc.nasa.gov/4345" target="_blank">NASA</a>
                    </p>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                        Back to story
                    </button>
                </div>`
                carousel();
                subpanel();
                let initOverlay = "01016629121DC075CCF7Show"
                document.getElementById(initOverlay).click();
            }          
        });
    });
    document.querySelectorAll('.backToStory').forEach(cardLink => {
        cardLink.addEventListener('click', function () {
            hideLayers();
            let media = document.querySelector('.mediaContain');
            let content = document.querySelector('.content');
            media.innerHTML =
            `<div class="slideshow-container">
                <div class="mySlides fade" value="031A3AC6051DC4237116Show">
                    <a href="https://www.youtube.com/watch?v=7e7QAQVHb0Y">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/risingwaters.jpg" height="100%">
                        <div class="playoverlay" style="display:block;"></div>
                        <div class="captionDiv">
                            <div class="caption" >Rising Waters: A Warmer World</div>
                        </div>
                    </a>
                </div>
                <div class="mySlides fade" value="031A3AC6051DC4237116Show">
                    <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png">
                    <div class="captionDiv">
                        <div class="caption" >Aerosol Earth - 8/23/2018</div>
                    </div>
                </div>
                <div class="mySlides fade" value="06BE8162931DC06FFA3DShow">
                    <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png">
                    <div class="captionDiv">
                        <div class="caption" >Ocean Heat Content - 2011</div>
                    </div>
                </div>
                <div class="mySlides fade" value="03A1ABD0001DC073A969Show">
                    <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png">
                    <div class="captionDiv">
                        <div class="caption" >Sea Surface Temperature - 2015</div>
                    </div>
                </div>
                <div class="mySlides fade" value="01016629121DC075CCF7Show">
                    <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png">
                    <div class="captionDiv">
                        <div class="caption" >Sea Surface Height</div>
                    </div>
                </div>
                <a class="prev minusSlidesClass">&#10094;</a>
                <a class="next plusSlidesClass">&#10095;</a>
            </div>`
            content.innerHTML = 
            `<div class="title">
                Why does it matter?
            </div>
            <div class="snippet">
                Click the image carousel arrows to change layers
            </div>
            <div class="description">
                <p class="text" style="margin-top:16px;">As greenhouse gases trap more energy from the sun, the oceans are absorbing more heat, resulting in an increase in sea surface temperatures and rising sea level. Changes in ocean temperatures and currents brought about by climate change will lead to alterations in climate patterns around the world. For example, warmer waters may promote the development of stronger storms in the tropics, which can cause property damage and loss of life. The impacts associated with sea level rise and stronger storm surges are especially relevant to coastal communities.</p>
                <p class="title" style="padding:0">Learn more about...</p>
                <div class="cardContainer">
                    <div class="cardLink" value="Aerosol">
                        <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aeroSm.png)"></div>
                        <div class="cardTitle">
                            <div class="cardText">Aerosol 8/23/2021</div>
                        </div>
                    </div>
                    <div class="cardLink" value="HeatContent">
                        <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/heatContentSm.png)"></div>
                        <div class="cardTitle">
                            <div class="cardText">Heat Content</div>
                        </div>
                    </div>
                    <div class="cardLink" value="seaTemp">
                        <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/SURF2015Sm.png)"></div>
                        <div class="cardTitle">
                            <div class="cardText">Sea Surface Temp.</div>
                        </div>
                    </div>
                    <div class="cardLink" value="seaLevel">
                        <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/seaSurfaceSm.png)"></div>
                        <div class="cardTitle">
                            <div class="cardText">Sea Surface Height</div>
                        </div>
                    </div>
                </div>
                <p class="text"><i>Credit:</i></br>Information: <a href="https://www.epa.gov/climate-indicators/oceans" target="_blank">United States Environmental Protection Agency</a>
                    </br>Aerosol Overlay: <a href="https://earthobservatory.nasa.gov/images/92654/just-another-day-on-aerosol-earth" target="_blank">NASA Earth Observatory</a>
                    </br>Heat Content Overlay: <a href="https://www.nnvl.noaa.gov/view/#WOAQ" target="_blank">NOAA</a>
                    </br>Sea Surface Temperature Overlay: <a href="https://www.nnvl.noaa.gov/view/#SURF" target="_blank">NOAA</a>
                    </br>Sea Surface Height Overlay: <a href="https://svs.gsfc.nasa.gov/4345" target="_blank">NASA</a>
                </p>
            </div>`
            carousel();
            subpanel();
            let initOverlay = "031A3AC6051DC4237116Show"
            document.getElementById(initOverlay).click();
        })
    })
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};