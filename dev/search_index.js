var documenterSearchIndex = {"docs":
[{"location":"#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"#API-Reference","page":"Manual","title":"API Reference","text":"","category":"section"},{"location":"","page":"Manual","title":"Manual","text":"quickhull","category":"page"},{"location":"#Quickhull.quickhull","page":"Manual","title":"Quickhull.quickhull","text":"quickhull(points, options=Quickhull.Options())\n\nCompute the convex hull of points. points can be a vector of point-like objects (e.g. Tuple or StaticVector) or a (D, N)-sized matrix of numbers.\n\nSee documentation for Quickhull.Options.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Manual","title":"Manual","text":"delaunay","category":"page"},{"location":"#Quickhull.delaunay","page":"Manual","title":"Quickhull.delaunay","text":"delaunay(points, options=Quickhull.Options())\n\nCompute the d-dimensional Delaunay triangulation of points. points can be a vector of point-like objects (e.g. Tuple or StaticVector) or a (D, N)-sized matrix of numbers.\n\nThe triangulation is found by lifting into (d+1) dimensions and taking the convex hull.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Manual","title":"Manual","text":"Quickhull.Options","category":"page"},{"location":"#Quickhull.Options","page":"Manual","title":"Quickhull.Options","text":"Quickhull.Options(options...)\n\nAvaliable options are:\n\nkernel – a subtype of HyperplaneKernel used for hyperplane calculations. HyperplaneKernelExactSIMD by default.\nindextype – a subtype of Integer that specifies how vertex indices should be stored. Int32 by default.\njoggle – whether to joggle the input points. false by default\njoggle_amount – how much to joggle the input points. 100.0 by default.\nstatistics – whether to record statistics. false by default.\nsubdivide – controls whether hull is computed by subdividing the input points and merging the resulting sub-hulls. Available options are:\nNoSubdivide() – don't use subdivision (default).\nSerialSubdivide(chunks=nchunks, levels=nlevels) – subdivide points into nchunks many chunks, nlevels many times recursively. Not parallel.\nParallelSubdivide(chunks=nchunks, levels=nlevels) – subdivide points into nchunks many chunks, nlevels many times recursively. Sub-hulls are computed in parallel.\n\n\n\n\n\n","category":"type"},{"location":"","page":"Manual","title":"Manual","text":"points(::Quickhull.AbstractHull)","category":"page"},{"location":"#Quickhull.points-Tuple{Quickhull.AbstractHull}","page":"Manual","title":"Quickhull.points","text":"points(hull)\n\nThe points the hull was constructed from. This includes points inside the hull - see vertices(hull).\n\n\n\n\n\n","category":"method"},{"location":"","page":"Manual","title":"Manual","text":"vertices(::Quickhull.AbstractHull)","category":"page"},{"location":"#Quickhull.vertices-Tuple{Quickhull.AbstractHull}","page":"Manual","title":"Quickhull.vertices","text":"vertices(hull)\n\nThe indices of points that are vertices of the hull.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Manual","title":"Manual","text":"facets(::Quickhull.AbstractHull)","category":"page"},{"location":"#Quickhull.facets-Tuple{Quickhull.AbstractHull}","page":"Manual","title":"Quickhull.facets","text":"facets(hull)\n\nThe facets of the hull. A facet is defined by D vertices.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Manual","title":"Manual","text":"GeometryBasics.Mesh(::Quickhull.AbstractHull)","category":"page"},{"location":"#GeometryBasics.Mesh-Tuple{Quickhull.AbstractHull}","page":"Manual","title":"GeometryBasics.Mesh","text":"GeometryBasics.Mesh(hull::Quickhull.AbstractHull)\n\nCreate a Mesh from the points and facets of hull.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Manual","title":"Manual","text":"Quickhull.PolyhedraLibrary","category":"page"},{"location":"#Quickhull.PolyhedraLibrary","page":"Manual","title":"Quickhull.PolyhedraLibrary","text":"PolyhedraLibrary(solver)\n\nCreate an instance of a Polyhedra.Library with the given solver that uses quickhull as a backend. Requires the Polyhedra package to be loaded.\n\n\n\n\n\n","category":"function"}]
}
