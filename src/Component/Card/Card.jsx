 
const Card = ({carts}) => {
    return (
        <div className="bg-slate-200  p-4 "> 
             <div className="text-blue-600 text-[17px] font-bold">Credit hour remaining {carts.length} hr </div>
             <div className="divider"></div>
             <div >
                <h2 className="font-bold text-[18px]">Course Name</h2>
                <div>
                    <ul>
                        {
                            carts.map(cart => <li key={cart.id}>{cart.name}</li>)
                        }
                    </ul>
                </div>
             </div>
             <div className="divider"></div>
             <div className="font-bold text-[18px]">Total credit hours :{carts.reduce((p,c) => p+c.credit,0)}</div>
             <div className="divider"></div>
             <div className="font-bold text-[18px]">Total price : {carts.reduce((p,c) => p+c.price,0)}</div>
        </div>
    );
};

export default Card;