class IbanForm extends React.Component {
    handleSubmit = (ev) => {
      ev.preventDefault();
      if (this.props.stripe) {
        this.props.stripe
          .createSource({
            type: 'sepa_debit',
            currency: 'eur',
            owner: {
              name: ev.target.name.value,
              email: ev.target.email.value,
            },
            mandate: {
              notification_method: 'email',
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
            Email
            <input
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
              required
            />
          </label>
          <label>
            IBAN
            <IbanElement
              supportedCountries={['SEPA']}
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
  