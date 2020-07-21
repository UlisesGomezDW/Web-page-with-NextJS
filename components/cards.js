const Card = ({users}) =>(
    <div className="row row-cols-6">
        {users.map((data, i)=>(
          <div key={i} className="card col" style={{width: '12rem'}}>
            <img src={data.avatar_url} className="card-img-top" alt="perfil" />
            <div className="card-body">
              <h5 className="card-title">{data.login}</h5>
              <p className="card-text">{data.html_url}</p>
            </div>
          </div>
        ))}
    </div>
)
export default Card