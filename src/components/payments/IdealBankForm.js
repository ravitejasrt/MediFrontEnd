
class IdealBankForm extends React.Component {
    handleSubmit = (ev) => {
      ev.preventDefault();
      if (this.props.stripe) {
        this.props.stripe
          .createSource({
            type: 'ideal',
            amount: 1099,
            currency: 'eur',
            owner: {
              name: ev.target.name.value,
            },
            redirect: {
              return_url: 'https://example.com',
            },
          })
          .then((payload) => console.log('[source]', payload));
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Jane Doe" required />
          </label>
          <label>
            iDEAL Bank
            <IdealBankElement
              className="IdealBankElement"
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize, '10px 14px')}
            />
          </label>
          <button>Pay</button>
        </form>
      );
    }
  }