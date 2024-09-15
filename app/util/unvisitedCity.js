const unvisitedCities = [
    {
        name: 'Tokyo',
        description: "I am fascinated by its blend of modern tech and traditional culture. Let's not forget Anime.",
        content: '',
        images: [
            'https://imgs.search.brave.com/6rg9JY1u8lnJOmoPtH8hMVQZ3XiklbPvLfMK3m100XI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/ODM2MDE2MC9waG90/by9rYWJ1a2ljaG8t/cmVkLWxpZ2h0LWRp/c3RyaWN0LXNoaW5q/dWt1LXRva3lvLWph/cGFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz03TWpjalQ0/WjNwbzlPR3BraTkw/Zm5CdFY5aGxQb1Rk/TVJrRGJQWEpjbE5R/PQ',
            'https://imgs.search.brave.com/J32cdM3EL0yUQLb2K8GtAX9u3Iu2OBNi-RKWfC-Y99o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzE3LzM2/LzM2MF9GXzI2ODE3/MzY0Ml85NjdEdFVG/R0ROdkQ2dnN3dDNs/cFpKbkZBalJFRjhI/RS5qcGc',
            'https://imgs.search.brave.com/8Q0h-ZCUCfeX-MryECOlO491204E_kaGrOx0rRPi4hY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQ0/NTEwNzQ0L3Bob3Rv/L3Rva3lvLWNpdHkt/d2F0ZXJmcm9udC1z/a3lsaW5lLWF0LWRh/eXRpbWUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXkyUFE2/NldINmZPR2dybkNp/MC1UUF9UeDhmcHBU/ck0tRzlMYmEyUUZq/blk9',
        ],
    },
    {
        name: 'Paris',
        description: 'The art, food, and history of this city make it a must-visit for me.',
        content: '',
        images: [
            'https://imgs.search.brave.com/ygZW7ptiakq5_5zUfxuqju-hiWTDQp7838idbkuacss/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ0LzMxLzMw/LzM2MF9GXzQ0MzEz/MDc3X3NHbXd5WElT/cEZWc0NtcEt2bndF/eFBxNkZGM3FzSGRh/LmpwZw',
            'https://imgs.search.brave.com/-Qo2OnSpDe4_9nBNzbl7qUuT8yvXhxWnOvVlqFXmkgI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NTYyMTU2NS9waG90/by9wYXJpcy1jaXR5/LWluLXRoZS1zcHJp/bmd0aW1lLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz00T0kx/bkY2dWoxSy1WbXNK/TjYxS1h5NURobUV2/eEI3VkdEMTNwaWxL/WFdFPQ',
            'https://imgs.search.brave.com/-j67td6rsWz0X8ZP-Qrfbw8ntINFp365IYU16hujck4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ4/NjQzMDU0L3Bob3Rv/L3BhcmlzLXNreWxp/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTN1QjVhVHZ2/RUtxdTFXbzhLWk1S/SXZFSlpheWJsUU9W/eU5fQjRiMjVWZkk9',
        ],
    }
];

export default unvisitedCities;