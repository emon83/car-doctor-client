import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('Service book successfully updated')
            }
        })
    };
    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <div className="card-body">
        <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your name"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={"$" + price} name="price" className="input input-bordered" />
        </div>
            </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
        </form>
      </div>
    </div>
    );
};

export default Checkout;