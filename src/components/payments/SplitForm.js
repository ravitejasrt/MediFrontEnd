class SplitForm extends React.Component {
    handleSubmit = (ev) => {
      ev.preventDefault();
      if (this.props.stripe) {
        this.props.stripe
          .createToken()
          .then((payload) => console.log('[token]', payload));
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Card number
            <CardNumberElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            CVC
            <CardCVCElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Postal code
            <PostalCodeElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <button>Pay</button>
        </form>
      );
    }
  }
  