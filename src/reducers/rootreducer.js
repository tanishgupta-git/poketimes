const initistate = {
    posts:[
        {id:'1',title:'Squirtle Laid an Egg',body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {id:'2',title:'Charmander Laid on Egg',body:'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
        {id:'3',title:'a Helix Fossil was found',body:'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'},
        {id:'4',title:'nesciunt quas odio',body:'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque'},   
        {id:'5',title:'dolorem eum magni eos aperiam quia',body:'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'},
        {id:'6',title:'magnam facilis autem',body:'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas'},
        {id:'7',title:'dolorem dolore est ipsam',body:'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae'},
        {id:'8',title:'nesciunt iure omnis dolorem tempora et accusantium',body:'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas'},
        {id:'9',title:'optio molestias id quia eum',body:'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error'}
    ]

}

const rootreducer = (state=initistate,action) => {
    if(action.type === "DELETE_POST" )
    {
        let newPosts = state.posts.filter(post => (post.id !== action.id))
        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootreducer;