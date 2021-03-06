Vue.component('memory-item', {
    template: 
    `
    <div class="memory-center">
        <div class="memory-container" :style="{ backgroundImage: 'url(' + src + ')'}">
            <div class="memory-quote">    
                <h2 :style="{color: clr}"> {{ quote }} </h2>
            </div>
        </div>
    </div>
    `,

    props: ['src', 'quote', 'clr'],

    data: function() {
        return {
            text: "Lorem Ipsum",
            backgroundImage: "temp.jpg",
        }
    },

    computed: {
        memoryContainer: function() {
            
        }
    }

    
})

new Vue({
    el: '#memoryComponents',

    data: {
        imageList: [
            {
                src: "ProjectPhotos/photo1.jpg",
                quote: "I knew from the very first date",
                color: "white",
            },
            {
                src: "ProjectPhotos/photo2.jpg",
                quote: "Just how lucky I was to be with you",
                color: "white",
            },
            {
                src: "ProjectPhotos/photo3.jpg",
                quote: "You have always been my number one supporter.",
                color: "black",
            },
            {
                src: "ProjectPhotos/photo4.jpg",
                quote: "And together we've made memories that will last us forever.",
                color: "white"
            }, 
            {
                src: "ProjectPhotos/photo5.jpg",
                quote: "We marked our spots in every place we've been.",
                color: "black"
            },
            {
                src: "ProjectPhotos/photo6.jpg",
                quote: `You never failed to make me smile
                        And every adventure more memorable than the last.`,
                color: "black",
            },
            {
                src: "ProjectPhotos/photo7.jpg",
                quote: "Some might say our relationship is quite explosive",
                color: "white",
            },
            {
                src: "ProjectPhotos/photo8.jpg",
                quote: "But I think the only thing exploding is our laughter",
                color: "white"
            },
            {
                src: "ProjectPhotos/photo9.jpg",
                quote: "Even though you always steal my sweaters...",
                color: "white",
            },
            {
                src: "ProjectPhotos/photo10.jpg",
                quote: "You will always be the most beautiful girl I know",
                color: "white"
            },
            {
                src: "ProjectPhotos/photo11.jpg",
                quote: "Even though the times have changed...",
                color: "white"
            },
            {
                src: "ProjectPhotos/photo12.jpg",
                quote: "I will always pre-love you.",
                color: "black",
            },
            
        ],
    },

});