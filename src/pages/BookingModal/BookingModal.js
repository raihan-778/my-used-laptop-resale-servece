import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookingModal = ({ category, refetch, isLoading }) => {
  const { user } = useContext(AuthContext);
  // const [booked, setBooked] = useState(null);

  const {
    categoryName,
    imgUrl,
    categoryId,
    postTime,
    reSalePrice,
    originalPrice,
    useDuration,
    sellerName,
    location,
    productName,
  } = category;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const buyerName = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const meatingLocation = form.location.value;
    const categoryName = form.categoryName.value;
    const categoryId = form.categoryId.value;
    const booking = {
      buyerName,
      email,
      phone,
      meatingLocation,
      price,
      productName,
      categoryName,
      categoryId,
    };
    //todo list
    /*
     *send data to the server
     *and once data is saved then close the modal
     *and display success toast
     */
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success("booking confirmed");
          refetch();
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
              name="name"
              disabled={user}
              defaultValue={user?.displayName}
              placeholder="Input you name"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="email"
              name="email"
              disabled={user}
              defaultValue={user?.email}
              placeholder="Your email"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="categoryName"
              disabled={user}
              defaultValue={categoryName}
              placeholder="category name"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="categoryId"
              disabled={user}
              defaultValue={categoryId}
              placeholder="category name"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="productName"
              disabled={user}
              defaultValue={productName}
              placeholder="Product Name"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="price"
              disabled={user}
              defaultValue={reSalePrice}
              placeholder="Product Name"
              className="input text-lime-900 font-bold input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input text-lime-900 input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input text-lime-900 input-bordered input-xs w-full "
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
