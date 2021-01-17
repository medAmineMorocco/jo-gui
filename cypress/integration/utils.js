export const itIf = (condition, title, fn) => {
    return condition ? it(title, fn) : it.skip(title, fn);
};

export const sizes = [
    {
    	device: 'iphone-5',
    	width: 320,
    },
    {
    	device: 'ipad-2',
    	width: 768,
    },
    {
        device: 'macbook-13',
        width: 1280,
    },
];