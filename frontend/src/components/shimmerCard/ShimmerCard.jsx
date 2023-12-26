const ShimmerCard = ({ height = "10px" }) => {
    return (
        <div className="placeholder-wave">
            <div
                className="col-12 rounded"
                style={{
                    height: height,
                    backgroundColor: "#b5b5b5"
                }}
            ></div>
        </div>
    );
};

export default ShimmerCard;