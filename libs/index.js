let langEn = document.querySelector('.body__nav-lang_eng')
let loginBtn = document.querySelector('.body__nav-login_btn')
let inputLearn = document.querySelector('.search__input')
let searchBtn = document.querySelector('.search__btn')
let suggestTxt = document.querySelector('.header__suggestions-title')
let typesSuggest = document.querySelectorAll('.suggest__type')
let suggestTop = document.querySelector('.topTypes')
let suggestBottom = document.querySelector('.bottomTypes')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')
let blockIcon = main.querySelectorAll('.block__image-part')
let infoContainer = main.querySelector('.info__container')


langEn.addEventListener('click', function () {

    if (langEn.innerHTML == 'Eng') {
        langEn.innerHTML = 'Rus'
    } else {
        langEn.innerHTML = 'Eng'
    }


})

loginBtn.addEventListener('click', function () {
    loginBtn.style.background = '#F5443B'
    loginBtn.style.border = '1px solid #F5443B'
})
loginBtn.addEventListener('dblclick', function () {
    loginBtn.style.background = 'none'
})

inputLearn.style.background = '#1F2143'
inputLearn.style.paddingTop = '22px'
inputLearn.style.paddingBottom = '22px'
inputLearn.style.paddingLeft = '32px'
inputLearn.style.paddingRight = '261px'

searchBtn.style.background = '#282B57'
searchBtn.style.padding = '14px'
searchBtn.style.position = 'absolute'
searchBtn.style.borderRadius = '6px'

suggestTxt.style.color = 'white'
suggestTxt.style.opacity = '50%'
suggestTxt.style.fontSize = '18px'
suggestTxt.style.marginTop = '50px'

for (let i = 0; i < typesSuggest.length; i++) {

    typesSuggest[i].style.color = 'white'
    typesSuggest[i].style.opacity = '50%'
    typesSuggest[i].style.border = '1px solid white'
    typesSuggest[i].style.paddingTop = '8px'
    typesSuggest[i].style.paddingBottom = '8px'
    typesSuggest[i].style.paddingLeft = '18px'
    typesSuggest[i].style.paddingRight = '18px'
    typesSuggest[i].style.borderRadius = '8px'


    typesSuggest[i].addEventListener('click', function () {

        if (typesSuggest[i].style.color == 'white') {
            typesSuggest[i].style.color = 'black'
            typesSuggest[i].style.background = 'white'
            typesSuggest[i].style.opacity = '100%'
        } else {
            typesSuggest[i].style.color = 'white'
            typesSuggest[i].style.background = '#1F2143'
            typesSuggest[i].style.opacity = '50%'
        }

    })
}


suggestTop.style.marginTop = '35px'
suggestTop.style.gridColumnGap = '20px'
suggestBottom.style.marginTop = '35px'


infoContainer.style.display = 'flex'
infoContainer.style.justifyContent = 'space-between'




let learnQuest = main.querySelector('.learn-question')
let learnTxt = main.querySelector('.learn__txt')

learnQuest.innerHTML = 'What Do You Want to Learn?'
learnTxt.innerHTML = 'Choose the right class as you need. Then enjoy studying.'

learnTxt.style.fontSize = '18px'
learnQuest.style.fontSize = '36px'


let showClasses = main.querySelector('.learn__show-classes')

showClasses.style.color = '#F5443B'
showClasses.style.border = '1px solid #F5443B'
showClasses.style.padding = '16px 32px'
showClasses.style.display = 'flex'
showClasses.style.justifyContent = 'center'

showClasses.addEventListener('mouseover', function () {

    showClasses.style.borderRadius = '10px'
    showClasses.style.transition = '.5s'
    showClasses.style.background = '#F5443B'
    showClasses.style.color = 'white'

})
showClasses.addEventListener('mouseout', function () {

    showClasses.style.borderRadius = '0px'
    showClasses.style.transition = '.5s'
    showClasses.style.background = 'none'
    showClasses.style.color = '#F5443B'

})


let wbTxtPart = main.querySelector('.webinar__title')
let wbTitle = main.querySelector('.webinar__title-title')
let wbText = main.querySelector('.webinar__text')

wbTitle.innerHTML = 'Live Online Webinar'
wbTitle.style.color = '#fff'
wbTitle.style.fontSize = '36px'

wbText.innerHTML = 'You can stream Webinar on our apps. Stay update on our Webinar, its Free'
wbText.style.color = 'white'
wbText.style.opacity = '50%'

wbTxtPart.style.textAlign = 'center'


let courseCost = main.querySelector('.course__cost-title_title')
let courseCostInfo = main.querySelector('.course__cost-txt_txt')
let courseTextPart = main.querySelector('.course__cost-title')
let cardCourse = main.querySelectorAll('.course__card')


courseCost.innerHTML = 'Course Pricing'
courseCost.style.color = 'white'
courseCost.style.fontSize = '36px'


courseCostInfo.innerHTML = 'Choose pricing that suits to your need'
courseCostInfo.style.color = 'white'
courseCostInfo.style.opacity = '50%'
courseCostInfo.style.fontSize = '18px'

courseTextPart.style.textAlign = 'center'



let coursePurchase = main.querySelector('.course__btn-purchase')
let coursePurchaseExpress = main.querySelector('.course__changed__color')
let coursePurchasePremium = main.querySelector('.course__changed_color')
let cardParent = main.querySelector('.course__cards')
let cardChild = main.querySelectorAll('.course__card')

coursePurchaseExpress.style.opacity = '100%'
coursePurchasePremium.style.opacity = '100%'



coursePurchase.addEventListener('click', () => {
    
    coursePurchase.style.color = 'white'
    coursePurchase.style.background = '#F5443B'
    coursePurchase.style.transition = '500ms'
    coursePurchase.style.borderColor = '#F5443B'
    coursePurchase.style.opacity = '100%'
    coursePurchase.innerHTML = "It's already yours"
    
})
coursePurchase.addEventListener('mouseout', () => {
    
    coursePurchase.style.color = '#F5443B'
    coursePurchase.style.opacity = '50%'
    coursePurchase.style.background = 'none'
    coursePurchase.style.transition = '500ms'
    coursePurchase.style.borderColor = 'rgba(245, 68, 59, 0.5);'
    coursePurchase.innerHTML = "Your current package"
    
})


coursePurchaseExpress.addEventListener('click', () => {
    
    coursePurchaseExpress.style.color = 'white'
    coursePurchaseExpress.style.background = '#F5443B'
    coursePurchaseExpress.style.transition = '500ms'
    coursePurchaseExpress.style.borderColor = '#F5443B'
    coursePurchaseExpress.style.opacity = '100%'
    
})
coursePurchaseExpress.addEventListener('mouseout', () => {
    
    coursePurchaseExpress.style.color = '#F5443B'
    coursePurchaseExpress.style.opacity = '50%'
    coursePurchaseExpress.style.background = 'none'
    coursePurchaseExpress.style.transition = '500ms'
    coursePurchaseExpress.style.borderColor = 'rgba(245, 68, 59, 0.5);'
    coursePurchaseExpress.innerHTML = "Buy Express"
    
})


coursePurchasePremium.addEventListener('click', () => {
    
    coursePurchasePremium.style.color = 'white'
    coursePurchasePremium.style.background = '#F5443B'
    coursePurchasePremium.style.transition = '500ms'
    coursePurchasePremium.style.borderColor = '#F5443B'
    coursePurchasePremium.style.opacity = '100%'
    
})
coursePurchasePremium.addEventListener('mouseout', () => {
    
    coursePurchasePremium.style.color = '#F5443B'
    coursePurchasePremium.style.opacity = '50%'
    coursePurchasePremium.style.background = 'none'
    coursePurchasePremium.style.transition = '500ms'
    coursePurchasePremium.style.borderColor = 'rgba(245, 68, 59, 0.5);'
    coursePurchasePremium.innerHTML = "Buy Premium"
    
})


cardParent.style.display = 'flex'
cardParent.style.justifyContent = 'space-between'


for (let t = 0; t < cardChild.length; t++) {
    
    
    cardChild[t].addEventListener('mouseover', () => {
        
        cardChild[t].style.transform = `scale(1.2)`
        cardChild[t].style.transition = `500ms`
        
    })
    cardChild[t].addEventListener('mouseout', () => {
        
        cardChild[t].style.transform = `scale(1)`
        cardChild[t].style.transition = `500ms`
        
    })
    
}


let getAppsTitle = main.querySelector('.get__apps-title')
let getAppsText = main.querySelector('.get__apps-txt')
let getAppsLink = main.querySelectorAll('.get__apps-links-image')
let areaGetApps = main.querySelector('.get__apps-area')
let areaRightSide = main.querySelector('.get__apps-right')

getAppsTitle.style.fontSize = '47px'
getAppsTitle.style.color = '#fff'


getAppsText.style.fontSize = '18px'
getAppsText.style.color = '#fff'
getAppsText.style.marginTop = '12px'
getAppsText.style.opacity = '80%'
getAppsText.style.maxWidth = '406px'

for (let q = 0; q < getAppsLink.length; q++) {
    
    getAppsLink[q].style.overflow = 'hidden'
    getAppsLink[q].style.height = '50px'
    getAppsLink[q].style.marginTop = '30px'
    
    
}

areaGetApps.style.display = 'flex'
areaGetApps.style.alignItems = 'center'
areaGetApps.style.background = 'linear-gradient(102.01deg, #23265C 1.96%, #352A56 101.68%'
areaGetApps.style.padding = '85px'
areaGetApps.style.justifyContent = 'space-around'
areaGetApps.style.height = '434px'
areaGetApps.style.borderRadius = '50px'
areaGetApps.style.marginBottom = '100px'


areaRightSide.style.paddingTop = '45px'





let rowParent = footer.querySelector('.rows')


rowParent.style.display = 'flex'

/* row 1 */
let footerFeedback = footer.querySelector('.footer__text-after_logo')
let footer1Row = footer.querySelector('.first__row')

footerFeedback.style.maxWidth = '234px'
footerFeedback.style.width = '100%'
footerFeedback.style.color = '#fff'
footerFeedback.style.opacity = '80%'
footerFeedback.style.padding = '8px 0 30px 0'
/* row 1 */


/* row 2 */

let secondRowTitle = footer.querySelector('.second__row-title')
let secondRowLink = footer.querySelectorAll('.second__row-link')


secondRowTitle.style.color = 'white'
secondRowTitle.style.fontSize = '20px'


for (let sec = 0; sec < secondRowLink.length; sec++) {
    
    secondRowLink[sec].style.color = 'white'
    secondRowLink[sec].style.opacity = '50%'
    
}
/* row 2 */

/* row 3 */

let thirdRowTitle = footer.querySelector('.third__row-title') 
let thirdRowLink = footer.querySelectorAll('.third__row-link')

thirdRowTitle.style.color = 'white'
thirdRowTitle.style.fontSize = '20px'


for (let sec3 = 0; sec3 < thirdRowLink.length; sec3++) {
    
    thirdRowLink[sec3].style.color = 'white'
    thirdRowLink[sec3].style.opacity = '50%'
    
}
/* row 3 */


/* row 4 */

let forthRowTitle = footer.querySelector('.forth__row-title') 
let forthRowLink = footer.querySelectorAll('.forth__row-link')

forthRowTitle.style.color = 'white'
forthRowTitle.style.fontSize = '20px'


for (let sec3 = 0; sec3 < forthRowLink.length; sec3++) {
    
    forthRowLink[sec3].style.color = 'white'
    forthRowLink[sec3].style.opacity = '50%'
    
}
/* row 4 */


/* row 5 */

let fifthRowTitle = footer.querySelector('.fifth__row-title') 
let fifthRowLink = footer.querySelectorAll('.fifth__row-link')

fifthRowTitle.style.color = 'white'
fifthRowTitle.style.fontSize = '20px'


for (let sec3 = 0; sec3 < fifthRowLink.length; sec3++) {
    
    fifthRowLink[sec3].style.color = 'white'
    fifthRowLink[sec3].style.opacity = '50%'
    
}
/* row 5 */