const visitedCities = [
    {
        name: 'Kathmandu',
        description: 'The vibrant capital city where I grew up. Rich culture and history.',
        content: '',
        images: [
            'https://imgs.search.brave.com/HbJ4HL0SU4OPzwsm9WwKY5rLEplyCwojeHHonkJu2cM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MjQyODA0L3Bob3Rv/L2JvdWRoYW5hdGgt/c3R1cGEta2F0aG1h/bmR1LW5lcGFsLWZl/YnJ1YXJ5LTI3LTIw/MTcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUg4dU9QNFJM/TEpYd21HREV4d2V5/RGdlb2FiUUZFd0df/Z2Z5NVFtSGtXSjQ9',
            'https://imgs.search.brave.com/Fv7zQuQbTQpxLEENQurMx5hIZTd6oeaO1VppwoWe2xA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzg4Lzg1LzU4/LzM2MF9GXzE4ODg1/NTgzMl9nSUN1ak5l/Mk1Yamt0dDhWOGdL/UmhkbWNxRXB6djhT/Uy5qcGc',
            'https://imgs.search.brave.com/GlH7upxcX02ArApW7DyG3Z5Uwwu80nh3bpHdjje69AY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzIzLzIzLzU4/LzM2MF9GXzMyMzIz/NTgwN19UY0VGblVE/VFRUcFBsUnhxZVJx/Qmg0R0tJOVBROUZt/Uy5qcGc',
        ],
    },
    {
        name: 'New York',
        description: 'Have some good friends who lives in the here. The City that never sleeps.',
        content: '',
        images: [
            'https://imgs.search.brave.com/zn6O1aIOa2qsSsMTf2cNXBxfRH-QgzRa1bbq50fDBMw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTc4NTkwL3Bob3Rv/L25ldy15b3JrLXNr/eWxpbmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJNSS1O/WF9Xcm5BYVpuMW9q/b1hJVE9UQXcwakJo/bHN3VDNXTDBtcEpY/ZG89',
            'https://imgs.search.brave.com/Aya2Zg4Rl4M9THoLqD1bT6BbWgYj7p4epHCrEzyIR6E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIz/NTM4Mjg3L3Bob3Rv/L3RpbWVzLXNxdWFy/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z1pNVV9ZQWNL/eGt3VUN1clpra0Fq/WU9kWmZueGhjQV9z/Wm5wSE14NzAzQT0',
            'https://imgs.search.brave.com/WIXMyb2HFB0Rt06mmO5q8kk4QoVtbeaIrpp5TEe6VDg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Njk2MDE4Ni9waG90/by90aGUtc2t5bGlu/ZS1vZi1uZXcteW9y/ay1jaXR5LXVuaXRl/ZC1zdGF0ZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXla/SlhOZHpxM2Q1Yktn/dlZ6UEJhaEJ1anBi/VlVYRnlqeWw5Rk45/TDdlc009',
        ],
    },
    {
        name: 'New Haven',
        description: 'Place I am pursing my MS in Data Science and also known as Capital City of Pizza.',
        images: [
            'https://imgs.search.brave.com/5AxZE4So7H1PSIphA9-Gl0fqlC0XoQQvZQcQM385FkE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQwLzI2LzE5/LzM2MF9GXzI0MDI2/MTk3OF9SdHJKUUtT/UE5EQ00zVFdqVWR3/VVFMOTdhY3hQb3p6/Ni5qcGc',
            'https://imgs.search.brave.com/3fKvWj14UZGCQbkIhuwIwFxtZ5xTmKuw3ZmhyRxPOG8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE0LzQ1LzMx/LzM2MF9GXzIxNDQ1/MzEzM18xVU42ZjZl/V0Z2dkJRV21UMHhY/cW1sV0dsaldCYnBE/Uy5qcGc',
            'https://imgs.search.brave.com/fYpoD27BG2O76aDXByqY0TjbzVcuL3W4HzXgnAftWw8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NDAzMTA1MC9waG90/by9zdW5zZXQtYXQt/bGlnaHRob3VzZS1w/b2ludC1wYXJrLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/UDFSSmlVcnJVQW5H/N3BLMVQ4S004R1RL/WnczMi1VQWo5ZmNS/UFVEWDY0PQ',
        ],
    },
];

export default visitedCities;