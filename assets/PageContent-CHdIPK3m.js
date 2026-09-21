import{h as e}from"./index-C9HNK-R2.js";const r=e.section`
    display: grid;
    gap: 32px;
`,t=e.p`
    margin: 0;
    color: #7dc4ff;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`,o=e.h1`
    max-width: 760px;
    margin: 10px 0 0;
    color: #f7fbff;
    font-family: "Oswald", sans-serif;
    font-size: clamp(2.4rem, 7vw, 5rem);
    font-weight: 600;
    line-height: 1;
`,i=e.p`
    max-width: 700px;
    margin: 18px 0 0;
    color: #b6c5d7;
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.8;
`,s=e.section`
    padding: clamp(24px, 5vw, 42px);
    border: 1px solid #1c3855;
    border-radius: 20px;
    background: rgba(13, 31, 50, 0.76);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);

    &.featureSurface {
        .featureHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(220px, 0.72fr);
            align-items: center;
            gap: 28px;
            margin-bottom: 28px;
        }

        .featureCopy {
            min-width: 0;
        }

        .featureImage {
            width: 100%;
            aspect-ratio: 1.35;
            border: 1px solid #285173;
            border-radius: 16px;
            object-fit: cover;
            box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
        }

        .starterLinks {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 18px;
            margin-top: 22px;

            span {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                color: #9fb0c4;
                font-size: 0.88rem;
            }

            span svg {
                color: #7dc4ff;
            }
        }

        @media (max-width: 720px) {
            .featureHeader {
                grid-template-columns: 1fr;
            }
        }
    }
`,n=e.h2`
    margin: 0;
    color: #f7fbff;
    font-family: "Oswald", sans-serif;
    font-size: clamp(1.55rem, 4vw, 2.2rem);
    font-weight: 500;
`,p=e.p`
    margin: 14px 0 0;
    color: #b6c5d7;
    line-height: 1.8;
`,d=e.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 24px;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`,x=e.article`
    padding: 22px;
    border: 1px solid #1c3855;
    border-radius: 16px;
    background: rgba(7, 17, 31, 0.64);
    transition: box-shadow 0.18s ease, text-shadow 0.18s ease;

    &:hover {
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24);
        text-shadow: 0 0 10px rgba(141, 209, 255, 0.48);
    }

    h3 {
        margin: 0;
        color: #f7fbff;
        font-size: 1.05rem;
    }

    p {
        margin: 10px 0 0;
        color: #9fb0c4;
        font-size: 0.92rem;
        line-height: 1.7;
    }
`,m=e.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #8dd1ff;
    font-weight: 700;
    text-decoration: none;
    transition: box-shadow 0.18s ease, text-shadow 0.18s ease;

    &:hover {
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
        text-shadow: 0 0 12px rgba(141, 209, 255, 0.76);
    }
`;export{p as B,d as C,t as E,i as L,r as P,s as S,o as T,m as a,n as b,x as c};
