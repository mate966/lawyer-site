import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_h8lahjd",
                "template_6jwmpxz",
                form.current,
                "user_YsDGFkeeNbTPsGfvfICdT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="contact wrapper" id="contact">
            <h3 className="section__heading">Kontakt.</h3>
            {window.location.pathname !== "/contact" ? null : (
                <p className="section__paragraph">
                    Masz jakieś pytania? A może chcesz mnie uszczęśliwić i
                    przygotowałeś ofertę pracy? Odezwij się w wygodny dla Ciebie
                    sposób, a na pewno odpowiem!
                </p>
            )}
            <div className="contact__details">
                <div className="details__rectangle">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFRUlEQVRYhc2YW6hUVRjHf9/svWb0YFoZmWZUpmBYlp7TvSh6sIgQKulKKd2wnrpCFyIiCOqleiiSqAjKyIruFF1U0CB1rznHShNvodIFKisrPTN7z/73sKeamc6Z2zlZ/8fv+pu11ux1gf+5bMQVtCxwTDvBYKZgAljFsN2gDWXr/fI/A3Typ4IWgl0MHDpM2HZDrxjhsyU7cfN+ARyj9UcnxI8YtgCoACuBN1LS7QFuh5DLkR5RQbMsgz8JiIEnY9wD2OyfugFtS3kVL3Hyvzv5xMk/haLJrXOimaH8m05eofzXTr73X4ELFd3h5CtOfqvTujmd5gfyFzr5n5z8bwUV548qnJNf5OTlVFyNokO6rZOXP9Yp2u7k92VruLVarsFQxdMMrQBtjUlOx07dU+sfo/6jUiqLBeeBTTVIBF8JvZ1QXoKdvrs2viA/PcXWGCqFWN9em/tNs/65pnRaFhhaAuwN0Pw6OMlCRXdVSDcJuxOsBLwn+BiYYNhDjsK2vIqX15YsWe9WwWWCSTF6uNUANZVTdH02tf6Wf/r8o05eeRXfLchPHyL3FCfvnXzq5G8cwv985us/aQSAfqOT34oiV2vPq7igCv4s0vCzoKjHya908uW8/OxaV4+KU7K1GC3tCi6v6Pjs0xDdV99U5uS3OPnNaEO+ZSGtPczJ/xrKv9XoCuVfdfK/oqhnuPRhf31K7gKAAC2rtTsG+oDpoMewWeWWgHbyd8DzBuej/gPrm+tlYFyAzukY0NA0YLBEX8MWlc7N/LaiJdxftVgOuBDNrrcHAxlEcEwXgDYV2IWZau1CBwOUCX9sFzDFfsiaaWKtvUR+B5ACR3YMmJLGgGu0W7VZnnhSu4A5NDmrqe/rPb8EQM5Ik44BjdwOYCpafUC9XZ9mzZjXLqCy2MGEsQO1doebWfXv7AIwXQ2EBcbWLeCy9X0OGgC7FW0Y1wquoOgY4CrQ69is3+rB7dwqxicdA5YJPgQGK7Co0SdydxpMDhl8EW0pDEunNRNTeBVIcnBfo9uwhcDOmDmfdwyIzflZ6B2D+T0qTql1JTb3I2H3GMx37FkVKjqzHmxZkJe/yBGsAzvO4JqS9W2rDakeFo43bClm6XAY4bCAmZ4EFpRJrwMebIB82Kn4LfCowSonvwtsEygPzBIcArZDaF5sfUN9km4AKjkqTzcDaHmacfKRwZQymo717f1HgD47yFG+2rB5QkeBVYQ2G/ZuzPiXsBmlxpQeFafEaIvg/cR6L2nF0FSB1l1Q3fLuHlGhGjn5p7LDb/+Jo1VwuZP/Ga2Z2Dq6uQrqn+Hky07+hXbim58HqxJ2LzDB4UY8iimVB7LGun+kteoUyr/u5AfzimZ2X2PdGdXz4RPt5rQ1ggAhdguQCFuC1Pl9WitCI/cEsDse7dH7U6Giu6qXp2u6yL29mnttJ3mdjYQi57AiMCkmORY7pa0TzVitPSIh2Ai2PmbOWY0npGZqe4oBsL5YpIuBiY6wvXUkWYXgaSBvpDd1Ate18vKPVC9MV7SKdSourr4q3NNNr+4ej7Sl4NizBjgypDJ7n528a6iwMVp/dIVkPfBFzLazsEsrnbbqbIr/lM0oGXYlUEgInxnyXy3lKiTPAUGOYFE3cCNWqOJt2T8zurnR5+RvHc63/yTlnPzH2f327321emXd61T8oKtvZo1G/MI6VgOHJ6SfgX6M2dcLB6SOJAIOa7Y+9xsgZO+GQq8AL4CloIWGLSjb3NdGo/6oyMk/Vn0OkVPx8dGqOyojCFR3mdwKUBgz/uyhDqr/vaRc08ekLvQHjCqFp72OKlkAAAAASUVORK5CYII="
                        alt="Location icon"
                    />
                    <p className="section__paragraph">www.mateuszszweda.pl</p>
                </div>
                <div className="details__rectangle">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAC9klEQVRYhe3YT4iUdRzH8ff32ef3qAc1yA3qaJCBHZx5xnVZSDMQRAwzzYMnK1pv0c2FPWRg4B49dCgI6lCBlYqWBwUnpNY/M8/MFtYlBA8dIiPQRHfn98zz6eAsjrE76+yMOwTzvg2/7+/5vS7PMzwP9OvXr2XmlIz2GtEqc0rUa0SrQgDBSYMPeo1pTjBusDsEMLjpLU56jWrOKbkJEDR+b1mu0toeeh6qYdkCD4Dr6gTVSNVdvWPdL1Syvc5ACVgHD4CTgn9EdiJUMo5kSy6TLFQybvCd0D1gshl4LUUbgKLBkYjKaVR9YulwP6wMqXxlcASYTKkXgGvNQLDCX57b2w1NCHY6squRSi88btsyTT3nWHHZYA/wsUcvY0N/zK4HD03b1rRmhTHD9gPPiOBSpMrex4dLXsmoXwXWAm94iw9iBd88E8y1sWb5Lw1GgD+FjjtVjqFi2DWZjg9ESg5ncAq4Bfait/jTuUbnBN5Hxj97fE7oNOgdx+rz6KenOsddeTLi2bOC9wzOeWZy3vLl+cbnBQJgw7dT4t3CxkCbHWnZqbpxsTan6gbHQEmwzdBEjes7sZG/W+1pDQQwU2r5iQx2ASshu+hUebNdXKTyfsh+BFtj2Os1K4xh++oL7VsY2Khu8bcBwRDoOugTp+Qj9Eu04EYVw0jlo8I+B/1u2HDN8t886rmPDASYsdxvnhXDQl8Do46ZC6j89Py4yqBj1TlhhwRnPAzVLP9rO2e2BQTA1t9JifeB3gVtcthUqNJL/x0LVR0J0RSw2eD9lPyrWOFWu8e1DwQwk7fCMZFtAzCC86Eqh2aXnZJRIysaLBPaUbP4MGbZYo7q6NmW2sbvl6u6qU52wtBRp+T5xtIBoDpA8Nq05W50ckbHD99py91AxRHHqg+Bxt1tX3iyt73l7nZ6/e78O9jWaQ9vOZUvAniLP+vKdekWsJG3Qtdgsy3uJlnC+sBO6wM7bfbFfdApiXuNaU4waPxPPn0c7DWiX79+HfQvRkUUz03afpEAAAAASUVORK5CYII="
                        alt="Mail icon"
                    />
                    <p className="section__paragraph">szweda.mateusz@wp.pl</p>
                </div>
                <div className="details__rectangle">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEOElEQVRYhe2YXYgVZRzGf/+z887qETS1NhEKyixsrVVbo8DNpJuguiuyxC50g4jKviwIvOiLPgj6siuLQBJNvIy6iDLUXdY9846eBTFNjG7EFCJFKc+cPU8XM+runtnVzT1nb3wu3+f9v+d3Zv7zzjMvXNWVycZ01TsroHWtwVyobU1saX+TuC5oVMBA8fIC2iaYkw2dg9q9iS3d1yQ2AAp5g07xU4Z+FBbW0MOGtQMJFL5GB8JmAubARS84+ZpTdKhV++YPGX/WyStU/OYkwsWrU7h4DxqYOcyUzMn/7OQrTqXFzWK60IOhSgtFwQO/JhSWY4v/Hjl5iso3DVIdAB1J4G6sM2k04JAebHkSCA17Ig8O4F/r+B3sDbBFAYXXGw03AlACqMDJsQoSFn8B7DK0IVRpYUPpGAIo+APAoXljVpjVCrQ8DQyKls8bizcE0GjpARA8cKmic7bosOB7UBfS2Jv9RAFWbNEB4KjBqkv+qKKiQRfQg5maAgggtAlYEODvH6sowNYDbYY2NhKuXiq3OfkzTn7XaFOKiudmc3oafXth5KvOOk4YfAJ0tco/kleQoHeBIujlRt9eyAsLimY47DfgdELQgXWcHeI5hx0DlKD5WOepRgPWhwXrPGXYOmCeo/rBCC8x7BngOkdhUzNu8agK5Hc4+VqguG7bcYo/zYLDe5PBlkrlNqf4uFN8fKr6bxjubW8J5X9w8goUvTpJhBDId6XpxZdQ79RhpvqmO/n+LP2smSTEiznQyW+uM7V3tpMfcPLVUNFjk4CXyin6Mu05/06dqf45TtEhJ191itdOAh6gyIXy36U951+r9/uud/Ll9KHK8ZsiRUUnvzv7HOiu9/fOznpSoaL3h21BkoXyj2f1g07+l1D72y/nZ8e3j6Wb+E7gTsNWV2zJ1uF+3/QQ963gQaEdVeh22ALgY+AesD9FbbdhDwEFwVtVTn+IraiOi2NsyHKbkz+Y9lzeldze4hR9lj1YJ9Mr7s8EijagqAjQqv23OsV7sjlRqOiOiQO8CBmnPRe9kjclVPxoBvhVUfHc+jVUcPIvOvmzTv5c9gfcBEJGM7KeUqjo7fw5O4NLLdMqf4uT35Vdzdgp7phIyOL5N4qT34x2Tvl/66jgFD+fxbh/nOLOCYQ8EJ7fJ518qe61OA6F2t+erhN/dH4s9+hjXLL2SmKd3cBzQEeVoJQXMC5rKQZvBhAcu2KuPAWK70sDhq85+Y2oPO1ya1tVus3J/xXKH0P7rmkIIAAqt2VRTU7+yGjJfHhN7ywnfzh7mpc1Dm6IQsUrnfyJDHR3oGhFbsDVwEwn3+vka6H8qpF2YxOx+qaHBOuFvQRMAw4Kthj8lBAcDRm8VmgbsBBsXWJL6g4CmhPZVW4LSNYY1g2MPLmoGKyt2F3f5JU2/ZsiVHy70DKDG8EKUNiSHRpcVUP0H4dZQetIyRRNAAAAAElFTkSuQmCC"
                        alt="Phone icon"
                    />
                    <p className="section__paragraph">+44 7957515022</p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="form__user-details">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Wpisz swoje imię"
                        className="user-details"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Wpisz swój email"
                        className="user-details"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Co chcesz mi przekazać?"
                    className="textarea"
                />
                <input
                    type="submit"
                    value="Wyślij wiadomość"
                    className="submit-button"
                />
            </form>
        </section>
    );
};

export default Contact;
