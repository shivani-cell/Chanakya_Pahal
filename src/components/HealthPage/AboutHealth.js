import React from "react";
import Box from '@material-ui/core/Box';
function AboutHealth(props){
    return(
    <>
        <div style={{  marginTop: '60px', width: '100%' }}>
    <Box color="white" bgcolor="blue" p={1} textAlign="center" fontSize="30px">
    Smile on Wheels - Mobile Charitable Hospital for Poor and Underprivileged communities
    </Box>
    </div>
    <React.Fragment>

<h1 className="text-center text-danger text-capitalize my-5">About Chanakya Pahal</h1>
<div className="container">
    <div class="row">
        <div class="col">
            <div class="card">
<                             div class="card-body">
                    <h2 class="Chankaya Pahal">Mission Health </h2>
                        <p class="card-text">

"He who has health has hope; and he who has hope has everything" – Arabic proverb

India has made rapid strides in the health sector since independence. However, various eye opening data from NFHS clearly indicate that access to healthcare still remains a challenge.

While the health statistics of rural India continue to be poor, the health status and access to health for the poor in urban slum dwellers has surfaced to be equally deplorable and have less than 4% of government primary healthcare facilities.

Urban slum dwellers suffer from adverse health conditions owing to mainly two reasons –first the lack of education and thus lack of awareness; and second the unwillingness to lose a day’s wage in order to reach the nearest medical facility. Healthcare for underprivileged, which is a desperate need, thus remains unaddressed.

The need of the hour is thus a two pronged approach – first to bring quality healthcare services to doorsteps of the needy and second to promote healthcare awareness and contemporary healthcare seeking behavior among the underprivileged.

In such a scenario a mobile healthcare services delivery system is the most practical mechanism. And in subscription to this view, Smile Foundation has initiated the Smile on Wheels programme. This is a unique mobile hospital programme that seeks to address problems of mobility, accessibility and availability of primary healthcare with a special focus on children and women, in urban slums and remote rural areas.

The Chanakya Pahal on Wheels programme has so far provided free healthcare services to more than 15,41,000 children and families
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="./images/first.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment> 
    </>
    );
}
export default AboutHealth;