from flask import Flask, render_template, url_for

from content import get_home_context

app = Flask(__name__, static_folder="public", template_folder="templates")


@app.context_processor
def inject_asset_helpers():
    def static_asset(path):
        if not path:
            return ""
        if path.startswith("http://") or path.startswith("https://"):
            return path
        return url_for("static", filename=path.lstrip("/"))

    return {"static_asset": static_asset}


@app.route("/")
def home():
    return render_template("index.html", **get_home_context())


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
