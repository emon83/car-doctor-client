const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const { _id, date, service, price, img, status} = booking;

  return (
    <tr>
      <th>
      <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
      </th>
      <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
      </td>
      <td>
        <p className="text-lg font-bold">{service}</p>
        <p className="text-gray-500">Color : Green</p>
        <p className="text-gray-500">Size: S</p>
      </td>
      <td className="font-bold">{date}</td>
      <td className="font-bold">{price}</td>
      <th>
        {
            status === 'confirm' ? <button className="btn btn-outline btn-success btn-sm">Approved</button> :
            <button onClick={()=> handleBookingConfirm(_id)} className=" btn bg-[#FF3811] hover:bg-[#d43718] btn-sm border-none">Pending</button>
            }
      </th>
    </tr>
  );
};

export default BookingRow;
