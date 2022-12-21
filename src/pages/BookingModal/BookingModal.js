import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookingModal = ({ category }) => {
  const { user } = useContext(AuthContext);
  // const [booked, setBooked] = useState(null);
  const navigate = useNavigate();

  const { categoryName, image, categoryId, price, productName } = category;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const buyerName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const image = form.image.value;
    const meetingLocation = form.location.value;
    const categoryName = form.categoryName.value;
    // const categoryId = form.categoryId.value;
    const booking = {
      buyerName: buyerName,
      email,
      phone: phone,
      MeetingLocation: meetingLocation,
      price: price,
      productName,
      image,
      categoryName: categoryName,
      categoryId: categoryId,
    };

    fetch(
      "https://b612-used-products-resale-server-side-raihan-778.vercel.app/booking",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success("booking confirmed");
          navigate("/dashboard/myproducts");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-sky-600 font-bold">{productName}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              type="text"
              name="price"
              disabled={user}
              defaultValue={`ProductPrice: ${price}`}
              placeholder="Input Price"
              className=" text-slate-700 bodrder rounded-xl py-5 font-bold input-bordered neutral input-xs w-full"
            />
            <input
              type="text"
              name="name"
              disabled={user}
              defaultValue={`Customer Name: ${user?.displayName}`}
              placeholder="Input you name"
              className=" text-slate-700 bodrder rounded-xl py-5 font-bold input-bordered neutral input-xs w-full"
            />
            <input
              type="email"
              name="email"
              disabled={user}
              defaultValue={user?.email}
              placeholder="Your email"
              className=" text-slate-700 bodrder rounded-xl py-5 font-bold input-bordered neutral input-xs w-full "
            />
            <input
              type="text"
              name="categoryName"
              disabled={user}
              defaultValue={`Product Category: ${categoryName}`}
              placeholder="category name"
              className=" text-slate-700 bodrder rounded-xl py-5 font-bold input-bordered neutral input-xs w-full "
            />
            <input
              type="img"
              name="image"
              disabled
              defaultValue={image}
              placeholder="Input you name"
              className=" text-slate-700 bodrder rounded-xl py-5 font-bold input-bordered neutral input-xs w-full "
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className=" text-slate-700 bodrder rounded-xl py-5 input-bordered neutral input-xs w-full "
            />
            <input
              type="text"
              name="location"
              placeholder="Please mention a suitable location to meet"
              className=" text-slate-700 bodrder rounded-xl py-5 input-bordered neutral input-xs w-full "
            />
            <br />
            <input
              className=" mt-5 w-full  btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
