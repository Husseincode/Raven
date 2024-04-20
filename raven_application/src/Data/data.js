import img1 from '../assets/finance.jpg'
import img2 from '../assets/strategy.jpg'
import img3 from '../assets/tech.png'
import img4 from '../assets/ethics.png'

export const data = [
    {
        name: 'Arithmetic progression',
        href: '#',
        img: img1,
        notes: `This calculates the arithmetic progression of series
        of numbers`,
        id: 1,
        genre: 'sequence and series'
    },
    {
        name: 'Geometric progression',
        href: '#',
        img: img2,
        notes: `This is designed to calculate the geometric progression of series of numbers and
        others relating to it. such as the sum to infinity, sum of GP, e.t.c`,
        id: 2,
        genre: 'sequence and series'
    },
    {
        name: 'Calculator',
        href: '/calculator',
        img: img3,
        notes: `Basic calculator that performs simple arithmetic tasks`,
        id: 3,
        genre: 'calculator'
    },
    {
        name: 'Mensuration',
        href: '#',
        img: img4,
        notes: `This is designed to handle the shapes of a solid shapes, by finding the volume, surface area
        and many more.`,
        id: 4,
        genre: 'solid shapes'
    },
    {
        name: 'Statistics (grouped data)',
        href: '/grp_stat',
        img: img4,
        notes: `This is designed to handle the shapes of a solid shapes, by finding the volume, surface area
        and many more.`,
        id: 5,
        genre: 'statistics'
    },
    {
        name: 'Statistics (ungrouped data)',
        href: '/ungrp_stat',
        img: img4,
        notes: `This is designed to handle the shapes of a solid shapes, by finding the volume, surface area
        and many more.`,
        id: 6,
        genre: 'statistics'
    },
]