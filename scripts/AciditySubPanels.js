function subpanel() {
    document.querySelectorAll('.cardLink').forEach(cardLink => {
        cardLink.addEventListener('click', function () {
            hideLayers();
            let media = document.querySelector('.mediaContain');
            let content = document.querySelector('.content');
            let panel = cardLink.getAttribute('value')
            if (panel == 'co2') {
                media.innerHTML =
                    `<div class="slideshow-container">
                        <div class="mySlides fade" value="0596BEE8781DC067AAF5Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f1900sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean CO<sub>2</sub> Exchange - 1900</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="0D8602A8B01DC0686634Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f1940sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean CO<sub>2</sub> Exchange - 1940</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="00D8B2ED301DC068E084Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f1980sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean CO<sub>2</sub> Exchange - 1980</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="0716AABBAC1DC06957AEShow">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean CO<sub>2</sub> Exchange - 2020</div>
                            </div>
                        </div>
                        <a class="prev minusSlidesClass">&#10094;</a>
                        <a class="next plusSlidesClass">&#10095;</a>
                    </div>`
                content.innerHTML = 
                    `<div class="title">
                        Ocean-Atmosphere CO<sub>2</sub> Exchange
                    </div>
                    <div class="snippet">
                        Click the image carousel arrows to change layers
                    </div>
                    <div class="description">
                        <img src="https://geteach.com/scripts/newearth/changingoceans/legends/co2Legend.png" style="width:100%;max-width:250px;"/>
                        <p class="text" style="margin-top:16px;">This transfer of CO<sub>2</sub> out of the ocean to the atmosphere is referred to as a positive "flux" while a negative flux means that the ocean is absorbing CO<sub>2</sub>. The ocean has a complicated pattern of both positive and negative fluxes. Prior to the Industrial Revolution and the burning of fossil fuels, the net global ocean flux was slightly positive to offset the absorption of CO<sub>2</sub> from the land plants. Today, humans have reversed that trend so the oceans absorb more CO<sub>2</sub> than they release although the complicated pattern of positive and negative fluxes still exists.</p>
                        <p class="text">Regions of upwelling (the equatorial Pacific and the west coast of South America) are natural sources of CO<sub>2</sub>, where old water with high concentrations of CO<sub>2</sub> is brought to the surface, and the excess CO<sub>2</sub> is degassed into the atmosphere. Colder regions are capable of absorbing more CO<sub>2</sub> than warm regions, so the polar regions tend to be sinks of CO<sub>2</sub> (see the North Atlantic and Arctic). As atmospheric CO<sub>2</sub> increases from the burning of fossil fuels, more regions of the ocean absorb CO<sub>2</sub> from the atmosphere, and the global ocean source and sink regions are no longer in balance. By 2100, much of the global ocean is expected to be a sink of CO<sub>2</sub> from the atmosphere. As this CO<sub>2</sub> dissolves into the ocean, it alters the ocean chemistry and lowers the pH of the water.</p>
                        <p class="title" style="padding:0">Learn more about...</p>
                        <div class="cardContainer">
                            <div class="cardLink" value="co<sub>2</sub>">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png)"></div>
                                <div class="selectCardTitle">
                                    <div class="selectCardText">Ocean CO<sub>2</sub> Exchange</div>
                                </div>
                            </div>
                            <div class="cardLink" value="pH">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean Surface pH</div>
                                </div>
                            </div>
                            <div class="cardLink" value="aragonite">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Aragonite Saturation</div>
                                </div>
                            </div>
                            <div class="cardLink" value="bleaching">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Coral Bleaching Alert</div>
                                </div>
                            </div>
                        </div>
                        <p class="text"><i>Credit:</i></br>Ocean CO<sub>2</sub> Exchange Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-atmosphere-co2-exchange/" target="_blank">NOAA GFDL Earth System Model</a>
                        </p>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                            Back to story
                        </button>
                    </div>`
                carousel();
                subpanel();
                let initOverlay = "0596BEE8781DC067AAF5Show"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'pH') {
                media.innerHTML =
                    `<div class="slideshow-container">
                        <div class="mySlides fade" value="081F804EDF1DC0819F62Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean Surface pH - 2020</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="04E9308EF61DC0800BDBShow">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID1900Sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean Surface pH - 1900</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="07FD9A67D51DC080A13AShow">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID1940Sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean Surface pH - 1940</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="0B15BDC3561DC081270BShow">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID1980Sm.png">
                            <div class="captionDiv">
                                <div class="caption" >Ocean Surface pH - 1980</div>
                            </div>
                        </div>
                        <a class="prev minusSlidesClass">&#10094;</a>
                        <a class="next plusSlidesClass">&#10095;</a>
                    </div>`
                content.innerHTML = 
                    `<div class="title">
                        Ocean Acidification: Surface pH
                    </div>
                    <div class="snippet">
                        Click the image carousel arrows to change layers
                    </div>
                    <div class="description">
                        <img src="https://geteach.com/scripts/newearth/changingoceans/legends/PhLegend.png" style="width:100%;max-width:250px;"/>
                        <p class="text" style="margin-top:16px;">Ranging from 0 to 14, pH is a scale that describes the acid and base properties of a solution. The ocean's surface has an average pH of around 8.1, which is slightly basic. The pH of the open ocean is relatively stable in both time and space; however, the uptake of CO2 by the ocean has caused measurable changes in seawater. The imagery here shows the output of a computer model that makes predictions of how the pH will change over time based on best estimates of likely CO2 emissions (RCP 8.5) used in the United Nations Intergovernmental Panel on Climate Change's AR5 assessment.</p>
                        <p class="text">Although the pH changes appear small, pH is on a log scale meaning that a change of one unit represents an order of magnitude change in the acidity of the seawater. Ocean acidification, a lowering of ocean pH, has the potential to significantly impact marine ecosystems by the end of this century.</p>
                        <p class="title" style="padding:0">Learn more about...</p>
                        <div class="cardContainer">
                            <div class="cardLink" value="co2">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean CO<sub>2</sub> Exchange</div>
                                </div>
                            </div>
                            <div class="cardLink" value="pH">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png)"></div>
                                <div class="selectCardTitle">
                                    <div class="selectCardText">Ocean Surface pH</div>
                                </div>
                            </div>
                            <div class="cardLink" value="aragonite">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Aragonite Saturation</div>
                                </div>
                            </div>
                            <div class="cardLink" value="bleaching">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Coral Bleaching Alert</div>
                                </div>
                            </div>
                        </div>
                        <p class="text"><i>Credit:</i></br>Ocean Surface pH Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-acidification-surface-ph/" target="_blank">NOAA GFDL Earth System Model</a>
                        </p>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                            Back to story
                        </button>
                    </div>`
                carousel();
                subpanel();
                let initOverlay = "081F804EDF1DC0819F62Show"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'aragonite') {
                media.innerHTML =
                    `<div class="slideshow-container">
                        <div class="mySlides fade" value="0BA99BE0D61DC0838FEDShow">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm1900.png">
                            <div class="captionDiv">
                                <div class="caption" >Aragonite Saturation - 1900</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="0FA96B86D71DC083FA71Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm1940.png">
                            <div class="captionDiv">
                                <div class="caption" >Aragonite Saturation - 1940</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="008C8FFC261DC084E215Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm1980.png">
                            <div class="captionDiv">
                                <div class="caption" >Aragonite Saturation - 1980</div>
                            </div>
                        </div>
                        <div class="mySlides fade" value="0691D9EF251DC08660F0Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png">
                            <div class="captionDiv">
                                <div class="caption" >Aragonite Saturation - 2020</div>
                            </div>
                        </div>
                        <a class="prev minusSlidesClass">&#10094;</a>
                        <a class="next plusSlidesClass">&#10095;</a>
                    </div>`
                content.innerHTML = 
                    `<div class="title">
                        Ocean Acidification: Aragonite Saturation
                    </div>
                    <div class="snippet">
                        Click the image carousel arrows to change layers
                    </div>
                    <div class="description">
                        <img src="https://geteach.com/scripts/newearth/changingoceans/legends/aragoniteLegend.png" style="width:100%;max-width:250px;"/>
                        <p class="text" style="margin-top:16px;">Aragonite saturation state is commonly used to track ocean acidification because it is a measure of carbonate ion concentration. Aragonite is one of the more soluble forms of calcium carbonate and is widely used by marine calcifiers (organisms with calcium carbonate structures). Corals and other calcifiers are more likely to survive and reproduce when the saturation state is greater than three. When aragonite saturation state falls below 3, these organisms become stressed, and when saturation state is less than 1, shells and other aragonite structures begin to dissolve. The predicted pH decrease of approximately 0.3 units during the 21st century would be a greater change than possibly at any time in the last 300 million years.</p>
                        <p class="title" style="padding:0">Learn more about...</p>
                        <div class="cardContainer">
                            <div class="cardLink" value="co2">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean CO<sub>2</sub> Exchange</div>
                                </div>
                            </div>
                            <div class="cardLink" value="pH">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean Surface pH</div>
                                </div>
                            </div>
                            <div class="cardLink" value="aragonite">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png)"></div>
                                <div class="selectCardTitle">
                                    <div class="selectCardText">Aragonite Saturation</div>
                                </div>
                            </div>
                            <div class="cardLink" value="bleaching">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Coral Bleaching Alert</div>
                                </div>
                            </div>
                        </div>
                        <p class="text"><i>Credit:</i></br>Aragonite Saturation State Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-acidification-saturation-state/" target="_blank">NOAA GFDL Earth System Model</a>
                        </p>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                            Back to story
                        </button>
                    </div>`
                carousel();
                subpanel();
                let initOverlay = "0BA99BE0D61DC0838FEDShow"
                document.getElementById(initOverlay).click();
            }
            if (panel == 'bleaching') {
                media.innerHTML =
                    `<div class="slideshow-container">
                        <div class="mySlides fade" value="043F58B5001DC088D978Show">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png">
                            <div class="captionDiv">
                                <div class="caption" >Coral Bleaching Alert: 7 Day - 10/10/21</div>
                            </div>
                        </div>
                    </div>`
                content.innerHTML = 
                    `<div class="title">
                        Coral Bleaching Alert: 7 Day - 10/10/21
                    </div>
                    <div class="description">
                        <img src="https://geteach.com/scripts/newearth/changingoceans/legends/coralLegend.png" style="width:100%;max-width:150px;"/>
                        <p class="text" style="margin-top:16px;">Local human activities, coupled with past thermal stress, threaten an estimated 75 percent of the world's reefs.</p>
                        <p class="text">By 2030, estimates predict more than 90% of the world's reefs will be threatened by local human activities, warming, and acidification, with nearly 60% facing high, very high, or critical threat levels.</p>
                        <p class="text">By 2050, estimates predict nearly all of the reefs will be threatened, with 75% facing high, very high, or critical threat levels.</p>
                        <p class="title" style="padding:0">Learn more about...</p>
                        <div class="cardContainer">
                            <div class="cardLink" value="co2">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean CO<sub>2</sub> Exchange</div>
                                </div>
                            </div>
                            <div class="cardLink" value="pH">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Ocean Surface pH</div>
                                </div>
                            </div>
                            <div class="cardLink" value="aragonite">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png)"></div>
                                <div class="cardTitle">
                                    <div class="cardText">Aragonite Saturation</div>
                                </div>
                            </div>
                            <div class="cardLink" value="bleaching">
                                <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png)"></div>
                                <div class="selectCardTitle">
                                    <div class="selectCardText">Coral Bleaching Alert</div>
                                </div>
                            </div>
                        </div>
                        <p class="text"><i>Credit:</i></br>Coral Reef Risk Information: <a href="https://sos.noaa.gov/catalog/datasets/coral-reef-risk-outlook/" target="_blank">NOAA</a>
                        </br>Coral Bleaching Alert: <a href="https://sos.noaa.gov/catalog/datasets/coral-bleaching-alerts-real-time/" target="_blank">NOAA Coral Reef Conservation Program</a>
                        </p>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect buttonStyle backToStory" id="backToStory" style="margin-top:16px;">
                            Back to story
                        </button>
                    </div>`
                carousel();
                subpanel();
                let initOverlay = "043F58B5001DC088D978Show"
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
                    <div class="mySlides fade" value="081F804EDF1DC0819F62Show">
                        <a href="https://www.youtube.com/watch?v=Qdj6z5my58U">
                            <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/acidificationThumbnail.jpg" width="100%">
                            <div class="playoverlay" style="display:block;"></div>
                            <div class="captionDiv">
                                <div class="caption" >What Is Ocean Acidification?</div>
                            </div>
                        </a>
                    </div>
                    <div class="mySlides fade" value="0716AABBAC1DC06957AEShow">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean-Atmosphere CO<sub>2</sub> Exchange - 2020</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="081F804EDF1DC0819F62Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png">
                        <div class="captionDiv">
                            <div class="caption" >Ocean Acidification: Surface pH - 2020</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="0691D9EF251DC08660F0Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png">
                        <div class="captionDiv">
                            <div class="caption" >Aragonite Saturation State - 2020</div>
                        </div>
                    </div>
                    <div class="mySlides fade" value="043F58B5001DC088D978Show">
                        <img class="image"src="https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png">
                        <div class="captionDiv">
                            <div class="caption" >Coral Bleaching Alert: 7 Day - 10/10/21</div>
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
                    <p class="text" style="margin-top:16px;">Although the oceans help reduce climate change by storing large amounts of carbon dioxide, increasing levels of dissolved carbon are changing the chemistry of seawater and making it more acidic. Increased ocean acidity makes it more difficult for certain organisms, such as corals and shellfish, to build their skeletons and shells. These effects, in turn, could substantially alter the biodiversity and productivity of ocean ecosystems.</p>
                    <p class="title" style="padding:0">Learn more about...</p>
                    <div class="cardContainer">
                        <div class="cardLink" value="co2">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/co2f2020sm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Ocean CO<sub>2</sub> Exchange</div>
                            </div>
                        </div>
                        <div class="cardLink" value="pH">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/ACID2020Sm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Ocean Surface pH</div>
                            </div>
                        </div>
                        <div class="cardLink" value="aragonite">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/aargSm2020.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Aragonite Saturation</div>
                            </div>
                        </div>
                        <div class="cardLink" value="bleaching">
                            <div class="cardImage" style="background-image: url(https://storage.googleapis.com/geteachkml4/geteachg4g21/assets/coralSm.png)"></div>
                            <div class="cardTitle">
                                <div class="cardText">Coral Bleaching Alert</div>
                            </div>
                        </div>
                    </div>
                    <p class="text"><i>Credit:</i></br>Information: <a href="https://www.epa.gov/climate-indicators/oceans" target="_blank">United States Environmental Protection Agency</a>
                        </br>Ocean CO<sub>2</sub> Exchange Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-atmosphere-co2-exchange/" target="_blank">NOAA GFDL Earth System Model</a>
                        </br>Ocean Surface pH Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-acidification-surface-ph/" target="_blank">NOAA GFDL Earth System Model</a>
                        </br>Aragonite Saturation Overlay: <a href="https://sos.noaa.gov/catalog/datasets/ocean-acidification-saturation-state/" target="_blank">NOAA GFDL Earth System Model</a>
                        </br>Coral Bleaching Alert: <a href="https://sos.noaa.gov/catalog/datasets/coral-bleaching-alerts-real-time/" target="_blank">NOAA Coral Reef Conservation Program</a>
                    </p>
                </div>`
            carousel();
            subpanel();
            let initOverlay = "081F804EDF1DC0819F62Show"
            document.getElementById(initOverlay).click();
        })
    })
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};