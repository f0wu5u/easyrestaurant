
import delivery from '../../assets/images/delivery.png';
import grocery from '../../assets/images/grocery.png';
import dinner from '../../assets/images/dinner.png';
import juice from '../../assets/images/juice.png';

export const categories = [
    {

        id:'1a',
        title : 'Delivery',
        caption: '200+ Eatries',
        image: delivery,
        backgroundColor: '#f5cecf'
    },
    {
        id:'1b',
        title : 'Pick up',
        caption: '134+ Eatries',
        image: grocery,
        backgroundColor: '#b5e6f1'
    },

    {
        id:'1c',
        title : 'Dine in',
        caption: '75+ Eatries',
        image: dinner,
        backgroundColor: '#f9d3b5'

    },

    {
        id:'1d',
        title : 'Drinks',
        caption: '20+ Eatries',
        image: juice,
        backgroundColor: '#e2e2e2'

    }
]

export const popularEatries = [
    {
        id: '1a',
        opened: false,
        liked: false,
        name: 'Osu Papaye',
        location : 'Osu Oxford Street',
        rating : 0,
        image : require('../../assets/images/asparagus.jpg')
    },

    {
        id: '1b',
        opened: true,
        liked: true,
        name: 'HoneySuckle Pub & Restaurant',
        location : 'Ring Road, Accra',
        rating : 5.0,
        image : require('../../assets/images/meat.jpg')
    },

    {
        id: '1c',
        opened: true,
        liked: true,
        name: 'Eddys Pizza - Dansoman',
        location : 'Dansoman High Street, Dansoman',
        rating : 3.7,
        image : require('../../assets/images/pizza.jpg') 
    },

    {
        id: '1d',
        opened: true,
        liked: false,
        name: 'Urban Grill',
        location : 'Icon House, N Liberation Link',
        rating : 4.2,
        image : require('../../assets/images/kebab.jpg') 
    }
]


export const trendingBrands = [

    {
        id: '1a',
        name: 'KFC',
        distance: '2km',
        image : require('../../assets/images/kfc.png') 
    },

    {
        id: '1b',
        name: 'Subway',
        distance: '3.7km',
        image : require('../../assets/images/sb.png') 
    },

    {
        id: '1c',
        name: 'Baskin',
        distance: '7.1km',
        image : require('../../assets/images/br.png') 
    },

    {
        id: '1cc',
        name: 'Burger King',
        distance: '6.1km',
        image : require('../../assets/images/bk.png') 
    },

    {
        id: '1d',
        name: 'McDonalds',
        distance: '1km',
        image : require('../../assets/images/mc.png') 
    },

    {
        id: '1e',
        name: 'Uber Eats',
        distance: 'Online',
        image : require('../../assets/images/ue.png') 
    },


]